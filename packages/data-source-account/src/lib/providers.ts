import { PresentationRepositoryImpl, UserRepositoryImpl } from './repositories';
import {
  UserEntity,
  PresentationEntity,
  PresentationCommentEntity,
  PresentationLikeEntity,
} from './entities';
import { Provider } from '@platform/util-shared';
import { CryptoServiceImpl } from './services';
import {
  provideAuthServerFacade,
  provideCreatePresentationServerUseCase,
  provideCreateUserServerUseCase,
  provideCryptoService,
  provideFindUserPresentationsServerUseCase,
  provideFindUsersServerUseCase,
  providePresentationRepository,
  providePresentationServerFacade,
  provideSignInServerUseCase,
  provideSignUpServerUseCase,
  provideUserRepository,
  provideUserServerFacade,
} from './providers/index';

export const dataSourceAccountProviders: Provider[] = [
  /**
   * User
   */
  provideUserRepository(UserRepositoryImpl),

  provideCreateUserServerUseCase(),
  provideFindUsersServerUseCase(),

  provideUserServerFacade(),

  /**
   * Auth
   */
  provideCryptoService(CryptoServiceImpl),

  provideSignInServerUseCase(),
  provideSignUpServerUseCase(),

  provideAuthServerFacade(),

  /**
   * Presentation
   */
  providePresentationRepository(PresentationRepositoryImpl),

  provideCreatePresentationServerUseCase(),
  provideFindUserPresentationsServerUseCase(),

  providePresentationServerFacade(),
];

export const dataSourceAccountEntities = [
  UserEntity,
  PresentationEntity,
  PresentationCommentEntity,
  PresentationLikeEntity,
];
