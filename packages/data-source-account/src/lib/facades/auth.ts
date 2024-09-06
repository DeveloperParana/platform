import { SignInServerUseCase, SignUpServerUseCase } from '@platform/domain-account';
import { SignInDto, SignUpDto } from '../dtos';

export class AuthFacade {
  constructor(
    private readonly signInUseCase: SignInServerUseCase,
    private readonly signUpUseCase: SignUpServerUseCase
  ) {}

  signIn(data: SignInDto) {
    console.log(data);

    return this.signInUseCase.execute(data);
  }

  signUp(data: SignUpDto) {
    return this.signUpUseCase.execute(data);
  }
}
