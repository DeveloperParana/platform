import { CreateUser, Role } from '@platform/domain-account';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto implements CreateUser {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  phone?: string | undefined;

  @IsString()
  minibio?: string | undefined;

  roles: Role[];
}
