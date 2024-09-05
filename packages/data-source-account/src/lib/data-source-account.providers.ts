import {
  JwtService,
  CryptoService,
  UserRepository,
  SignInServerUseCase,
  CreateUserServerUseCase,
  FindUsersServerUseCase,
} from '@platform/domain-account';
import { UserRepositoryImpl } from './repositories';
import { provideCryptoService } from './providers';
import { Provider } from '@platform/util-shared';
import { CryptoServiceImpl } from './services';
import { AuthFacade, UserFacade } from './facades';

export const dataSourceAccountProviders: Provider[] = [
  {
    provide: UserRepository,
    useFactory() {
      return new UserRepositoryImpl();
    },
  },

  {
    provide: CreateUserServerUseCase,
    useFactory(repository: UserRepository) {
      return new CreateUserServerUseCase(repository);
    },
    inject: [UserRepository],
  },

  {
    provide: FindUsersServerUseCase,
    useFactory(repository: UserRepository) {
      return new FindUsersServerUseCase(repository);
    },
    inject: [UserRepository],
  },

  {
    provide: UserFacade,
    useFactory(
      createUser: CreateUserServerUseCase,
      findUsers: FindUsersServerUseCase
    ) {
      return new UserFacade(createUser, findUsers);
    },
    inject: [CreateUserServerUseCase, FindUsersServerUseCase],
  },

  provideCryptoService(CryptoServiceImpl),

  {
    provide: SignInServerUseCase,
    useFactory(user: UserRepository, crypto: CryptoService, jwt: JwtService) {
      return new SignInServerUseCase(user, crypto, jwt);
    },
    inject: [UserRepository, CryptoService, JwtService],
  },

  {
    provide: AuthFacade,
    useFactory(signIn: SignInServerUseCase) {
      return new AuthFacade(signIn);
    },
    inject: [SignInServerUseCase],
  },
];
