import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  register(@Body() createUserDto: CreateUserDTO) {
    console.log(createUserDto);
    
    return this.usersService.register(createUserDto);
  }

  @Post('/login')
  login(@Body() loginUser: { cellphone: string; password: string }) {
    return this.usersService.login(loginUser.cellphone, loginUser.password);
  }

  @Patch('/updateUser/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('/deleteUser/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
