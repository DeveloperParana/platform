import { AuthFacade, PresentationFacade, UserFacade } from '../facades';
import {
  CreatePresentationServerUseCase,
  CreateUserServerUseCase,
  FindUserPresentationsServerUseCase,
  FindUsersServerUseCase,
  SignInServerUseCase,
  SignUpServerUseCase,
} from '@platform/domain-account';

/**
 *  _   _
 * | | | |___  ___ _ __
 * | | | / __|/ _ \ '__|
 * | |_| \__ \  __/ |
 *  \___/|___/\___|_|
 */

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

/**
 *     _         _   _
 *    / \  _   _| |_| |__
 *   / _ \| | | | __| '_ \
 *  / ___ \ |_| | |_| | | |
 * /_/   \_\__,_|\__|_| |_|
 */

export function provideAuthServerFacade() {
  return {
    provide: AuthFacade,
    useFactory(signIn: SignInServerUseCase, signUp: SignUpServerUseCase) {
      return new AuthFacade(signIn, signUp);
    },
    inject: [SignInServerUseCase, SignUpServerUseCase],
  };
}

/**
 *  ____                           _        _   _
 * |  _ \ _ __ ___  ___  ___ _ __ | |_ __ _| |_(_) ___  _ __
 * | |_) | '__/ _ \/ __|/ _ \ '_ \| __/ _` | __| |/ _ \| '_ \
 * |  __/| | |  __/\__ \  __/ | | | || (_| | |_| | (_) | | | |
 * |_|   |_|  \___||___/\___|_| |_|\__\__,_|\__|_|\___/|_| |_|
 */

export function providePresentationServerFacade() {
  return {
    provide: PresentationFacade,
    useFactory(
      createPresentation: CreatePresentationServerUseCase,
      findUserPresentations: FindUserPresentationsServerUseCase
    ) {
      return new PresentationFacade(createPresentation, findUserPresentations);
    },
    inject: [
      CreatePresentationServerUseCase,
      FindUserPresentationsServerUseCase,
    ],
  };
}
