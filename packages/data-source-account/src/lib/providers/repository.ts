import { UserRepository } from '@platform/domain-account';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Type } from '@platform/util-shared';
import { UserEntity } from '../entities';
import { Repository } from 'typeorm';

export function provideUserRepository(Repository: Type<UserRepository>) {
  return {
    provide: UserRepository,
    useFactory(repository: Repository<UserEntity>) {
      return new Repository(repository);
    },
    inject: [getRepositoryToken(UserEntity)],
  };
}

export function provideUserRepositoryTest(Repository: UserRepository) {
  return {
    provide: UserRepository,
    useValue: Repository,
  };
}
