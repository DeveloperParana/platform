import {
  provideAuthServerFacade,
  provideCreateUserServerUseCase,
  provideCryptoService,
  provideFindUsersServerUseCase,
  provideSignInServerUseCase,
  provideSignUpServerUseCase,
  provideUserRepository,
  provideUserServerFacade,
} from './providers/index';
import { UserRepositoryImpl } from './repositories';
import { Provider } from '@platform/util-shared';
import { CryptoServiceImpl } from './services';

export const dataSourceAccountProviders: Provider[] = [
  provideUserRepository(UserRepositoryImpl),

  provideCreateUserServerUseCase(),
  provideFindUsersServerUseCase(),

  provideUserServerFacade(),

  provideCryptoService(CryptoServiceImpl),

  provideSignInServerUseCase(),
  provideSignUpServerUseCase(),

  provideAuthServerFacade(),
];
