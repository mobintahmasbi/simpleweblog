import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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
      // user not can create 
    }
  }

  async login(cellphone: string, password: string) {
    try {
      const user = await this.userDB.findOneBy({ cellphone: cellphone });
      if (!user) {
        throw new NotFoundException('User with cellphone or password not Found!');
      }
      const token = await this.authService.generateToken(user)
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
      // Exception Error nestjs
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
