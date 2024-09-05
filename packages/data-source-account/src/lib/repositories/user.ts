import { UserRepository } from '@platform/domain-account';
import { FindParams } from '@platform/util-shared';
import { UserEntity } from '../entities';
import { CreateUserDto } from '../dtos';

export class UserRepositoryImpl implements UserRepository {
  createOne(entity: CreateUserDto): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  find(params: FindParams<UserEntity>): Promise<UserEntity[]> {
    throw new Error('Method not implemented.');
  }

  findOne(params: Partial<UserEntity>): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  updateOne(id: string, entity: Partial<UserEntity>): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  removeOne(idOrEntity: string | Partial<UserEntity>): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
}
