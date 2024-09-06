import { PresentationEntity, UserEntity } from '../entities';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Type } from '@platform/util-shared';
import { Repository } from 'typeorm';
import {
  UserRepository,
  PresentationRepository,
} from '@platform/domain-account';

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

export function providePresentationRepository(
  Repository: Type<PresentationRepository>
) {
  return {
    provide: PresentationRepository,
    useFactory(repository: Repository<PresentationEntity>) {
      return new Repository(repository);
    },
    inject: [getRepositoryToken(PresentationEntity)],
  };
}

export function providePresentationRepositoryTest(
  Repository: PresentationRepository
) {
  return {
    provide: PresentationRepository,
    useValue: Repository,
  };
}
