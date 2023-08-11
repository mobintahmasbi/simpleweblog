import { ConflictException, Injectable, NotFoundException , InternalServerErrorException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { compareHashedPassword, generatedHashedPassword } from './utilities/passwordManager';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userDB: Repository<User>,
  private readonly authService: AuthService){}
  async register(createUserDto: CreateUserDto) {
    try {
      //hashed password
      createUserDto.password = await generatedHashedPassword(createUserDto.password);
  
      //exist user
      const user = await this.userDB.findOneBy({ cellphone: createUserDto.cellphone });
  
      if (user) {
        throw new ConflictException('User with cellphone or password already exists')
      }
      const newUser = this.userDB.create(createUserDto);
      await this.userDB.save(newUser);
      return {
        success: true,
        reult: newUser.name,
        message: `User with name ${newUser.name} successfully registered`
      }
    } catch (error) {
      console.log(error);
      
      throw new InternalServerErrorException() 
    }
  }

  async login(cellphone: string, password: string) {
    try {
      console.log(cellphone);
      
      const user = await this.userDB.findOneBy({ cellphone });

      console.log(user);
      
      if (!user) {
        throw new NotFoundException('User with cellphone or password not Found!');
      }
      const token = await this.authService.generateToken(user)
      console.log(token);
      
      const passwordHash = await compareHashedPassword(password, user.password);
      try {
        if (passwordHash) {
          return {
            success: true,
            message: 'User successfully fetched',
            user: user,
            token,
          }
        }
      } catch (error) {
        throw new NotFoundException('User with cellphone or password not Found!');
      }
    } catch (error) {
      console.log(error);
      
      throw new InternalServerErrorException() 
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const { password } = updateUserDto;
    const user = await this.userDB.findOneBy({
      id: id,
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (password) {
      updateUserDto.password = await generatedHashedPassword(updateUserDto.password);
    }
    const userUpdate = await this.userDB.update({ id: id }, updateUserDto);
    return {
      success: true,
      message: 'user successfully updated',
      user: userUpdate,
    }
    } catch (error) {
      // error exception nestjs
    }
  }

  async remove(id: number) {
    try {
      const user = await this.userDB.findOneBy({
        id: id,
      });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      const userDelete = await this.userDB.delete({ id: id });
      return {
        success: true,
        message: 'user successfully deleted',
      }
    } catch (error) {
      // error exception nestjs
    }
  }
}

