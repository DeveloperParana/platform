import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthFacade, SignInDto } from '@platform/data-source-account';

@Controller('auth')
export class AuthController {
  constructor(private readonly authFacade: AuthFacade) {}

  @Post('sign-in')
  async createAuth(@Body() data: SignInDto) {
    try {
      const res = await this.authFacade.signIn(data);
      console.log(res);
      return res

    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }
}
