import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: 'please Enter Name'})
    @IsString()
    name: string;
  
    @IsNotEmpty({ message: 'please Enter Family'})
    @IsString()
    family: string;
  
    @IsNotEmpty()
    @IsString()
    password: string;
  
    @IsNotEmpty()
    @IsString()
    cellphone: string;
  
    @IsNotEmpty()
    @IsDate()
    birthDate: Date;
  
    @IsNotEmpty()
    @IsBoolean()
    active: boolean;
  
    @IsDate()
    @IsOptional()
    createdAt: Date;
  
    @IsDate()
    @IsOptional()
    updatedAt: Date;
  
    @IsDate()
    @IsOptional()
    deletedAt: Date;
}
