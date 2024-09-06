import { IsString, MinLength } from 'class-validator';
import { SignIn } from '@platform/domain-account';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto implements SignIn {
  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @MinLength(6)
  @ApiProperty()
  password: string;
}
