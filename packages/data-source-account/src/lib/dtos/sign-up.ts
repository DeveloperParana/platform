import { IsEmail, IsString, MinLength } from 'class-validator';
import { SignUp } from '@platform/domain-account';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto implements SignUp {
  @IsString()
  @ApiProperty()
  firstName: string;

  @IsString()
  @ApiProperty()
  lastName: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @MinLength(6)
  @ApiProperty()
  password: string;

  phone?: string;

  photo?: string;
}
