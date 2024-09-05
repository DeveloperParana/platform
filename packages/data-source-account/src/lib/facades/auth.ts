import { SignInServerUseCase } from '@platform/domain-account';
import { SignInDto } from '../dtos';

export class AuthFacade {
  constructor(private readonly signInUseCase: SignInServerUseCase) {}

  signIn(data: SignInDto) {
    return this.signInUseCase.execute(data);
  }
}
