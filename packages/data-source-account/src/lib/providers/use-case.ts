import {
  UserRepository,
  CreateUserServerUseCase,
  FindUsersServerUseCase,
  SignInServerUseCase,
  CryptoService,
  JwtService,
  SignUpServerUseCase,
  CreatePresentationServerUseCase,
  PresentationRepository,
  FindUserPresentationsServerUseCase,
} from '@platform/domain-account';

/**
 *  _   _
 * | | | |___  ___ _ __
 * | | | / __|/ _ \ '__|
 * | |_| \__ \  __/ |
 *  \___/|___/\___|_|
 */
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

/**
 *     _         _   _
 *    / \  _   _| |_| |__
 *   / _ \| | | | __| '_ \
 *  / ___ \ |_| | |_| | | |
 * /_/   \_\__,_|\__|_| |_|
 */
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

/**
 *  ____                           _        _   _
 * |  _ \ _ __ ___  ___  ___ _ __ | |_ __ _| |_(_) ___  _ __
 * | |_) | '__/ _ \/ __|/ _ \ '_ \| __/ _` | __| |/ _ \| '_ \
 * |  __/| | |  __/\__ \  __/ | | | || (_| | |_| | (_) | | | |
 * |_|   |_|  \___||___/\___|_| |_|\__\__,_|\__|_|\___/|_| |_|
 */

export function provideCreatePresentationServerUseCase() {
  return {
    provide: CreatePresentationServerUseCase,
    useFactory(repository: PresentationRepository) {
      return new CreatePresentationServerUseCase(repository);
    },
    inject: [PresentationRepository],
  };
}

export function provideFindUserPresentationsServerUseCase() {
  return {
    provide: FindUserPresentationsServerUseCase,
    useFactory(repository: PresentationRepository) {
      return new FindUserPresentationsServerUseCase(repository);
    },
    inject: [PresentationRepository],
  };
}
