import {
  CreateUserServerUseCase,
  FindUsersServerUseCase,
  SignInServerUseCase,
  SignUpServerUseCase,
} from '@platform/domain-account';
import { AuthFacade, UserFacade } from '../facades';

export function provideUserServerFacade() {
  return {
    provide: UserFacade,
    useFactory(
      createUser: CreateUserServerUseCase,
      findUsers: FindUsersServerUseCase
    ) {
      return new UserFacade(createUser, findUsers);
    },
    inject: [CreateUserServerUseCase, FindUsersServerUseCase],
  };
}

export function provideAuthServerFacade() {
  return {
    provide: AuthFacade,
    useFactory(signIn: SignInServerUseCase, signUp: SignUpServerUseCase) {
      return new AuthFacade(signIn, signUp);
    },
    inject: [SignInServerUseCase, SignUpServerUseCase],
  };
}
