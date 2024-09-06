import { User, UserRepository } from '@platform/domain-account';
import { FindParams, Paged } from '@platform/util-shared';
import { Repository, FindManyOptions } from 'typeorm';
import { UserEntity } from '../entities';
import { CreateUserDto } from '../dtos';

export type FindOperatorType = "not" | "lessThan" | "lessThanOrEqual" | "moreThan" | "moreThanOrEqual" | "equal" | "between" | "in" | "any" | "isNull" | "ilike" | "like" | "raw" | "arrayContains" | "arrayContainedBy" | "arrayOverlap" | "and" | "jsonContains" | "or";

export interface ValueTransformer {
  /**
   * Used to marshal data when writing to the database.
   */
  to(value: any): any;
  /**
   * Used to unmarshal data when reading from the database.
   */
  from(value: any): any;
}

export interface FindOperator<T> {
  type: FindOperatorType;
  value: T | FindOperator<T>;
  useParameter: boolean;
  multipleParameters: boolean;
  getSql?: any;
  objectLiteralParameters?: any;

  transformValue?(transformer: ValueTransformer | ValueTransformer[]): void;
}

export type FindOptionsWhere<Entity> = {
  [P in keyof Entity]?: Entity[P] | FindOperator<Entity[P]> | FindOptionsWhere<Entity[P]> | Entity[P][]; // Combinações permitidas para pesquisa
};


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

  async findOne(where: FindOptionsWhere<UserEntity>): Promise<UserEntity> {
    const options: FindManyOptions<UserEntity> = {
      where: where as any
    }
    const user = await this.repository.findOne(options);
    if (!user) throw `Not Found`;
    return user;
  }

  updateOne(id: string, entity: Partial<UserEntity>): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  removeOne(idOrEntity: string | Partial<UserEntity>): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
}
