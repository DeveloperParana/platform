import {
  User,
  FindUsersServerUseCase,
  CreateUserServerUseCase,
} from '@platform/domain-account';
import { CreateUserDto } from '../dtos';
import { FindParams } from '@platform/util-shared';

export class UserFacade {
  constructor(
    private readonly createUserUseCase: CreateUserServerUseCase,
    private readonly findUsersUseCase: FindUsersServerUseCase
  ) {}

  createUser(data: CreateUserDto) {
    return this.createUserUseCase.execute(data);
  }

  find(data: FindParams<User>) {
    return this.findUsersUseCase.execute(data);
  }
}
