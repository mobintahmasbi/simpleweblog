import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDTO) {
    name?: string;
    family?: string;
    age?:number;
    password?: string;
    cellphone?: string;
    birthDate?: Date;
}
