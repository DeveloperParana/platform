import { IsString, MinLength } from 'class-validator';
import { SignIn } from '@platform/domain-account';

export class SignInDto implements SignIn {
  @IsString()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;
}
