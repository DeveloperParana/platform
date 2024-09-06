import { User, UserRepository } from '@platform/domain-account';
import { FindParams, Paged } from '@platform/util-shared';
import { Repository, FindManyOptions } from 'typeorm';
import { UserEntity } from '../entities';
import { CreateUserDto } from '../dtos';

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly repository: Repository<UserEntity>) {}

  createOne(entity: CreateUserDto): Promise<UserEntity> {
    return this.repository.save(entity);
  }

  async find(params: FindParams<User>): Promise<Paged<User>> {
    const {
      page = 1,
      size = 10,
      prop = 'id',
      sort = 'ASC',
      props = {},
    } = params;

    const order = { [prop]: sort.toUpperCase() };
    const options: FindManyOptions = {
      order,
      skip: (page - 1) * size,
      take: size,
      where: props as UserEntity,
    };
    const [data, total] = await this.repository.findAndCount(options);

    return { data, total };
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
