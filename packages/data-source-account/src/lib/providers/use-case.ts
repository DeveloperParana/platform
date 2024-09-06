import {
  UserRepository,
  CreateUserServerUseCase,
  FindUsersServerUseCase,
  SignInServerUseCase,
  CryptoService,
  JwtService,
  SignUpServerUseCase,
} from '@platform/domain-account';

export function provideCreateUserServerUseCase() {
  return {
    provide: CreateUserServerUseCase,
    useFactory(repository: UserRepository) {
      return new CreateUserServerUseCase(repository);
    },
    inject: [UserRepository],
  };
}

export function provideFindUsersServerUseCase() {
  return {
    provide: FindUsersServerUseCase,
    useFactory(repository: UserRepository) {
      return new FindUsersServerUseCase(repository);
    },
    inject: [UserRepository],
  };
}

export function provideSignInServerUseCase() {
  return {
    provide: SignInServerUseCase,
    useFactory(user: UserRepository, crypto: CryptoService, jwt: JwtService) {
      return new SignInServerUseCase(user, crypto, jwt);
    },
    inject: [UserRepository, CryptoService, JwtService],
  };
}

export function provideSignUpServerUseCase() {
  return {
    provide: SignUpServerUseCase,
    useFactory(user: UserRepository, crypto: CryptoService) {
      return new SignUpServerUseCase(user, crypto);
    },
    inject: [UserRepository, CryptoService],
  };
}
