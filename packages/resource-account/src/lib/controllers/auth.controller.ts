import {
  Body,
  Post,
  Controller,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  SignInDto,
  SignUpDto,
  AuthFacade,
} from '@platform/data-source-account';

@Controller('auth')
export class AuthController {
  constructor(private readonly authFacade: AuthFacade) {}

  @Post('sign-in')
  async signIn(@Body() data: SignInDto) {
    try {
      const res = await this.authFacade.signIn(data);
      console.log(res);
      return res;
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }

  @Post('sign-up')
  async signUp(@Body() data: SignUpDto) {
    try {
      const res = await this.authFacade.signUp(data);
      console.log(res);
      return res;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
