import {
  Find,
  Paged,
  FindOne,
  CreateOne,
  FindParams,
  RemoveOne,
  UpdateOne,
} from '@platform/util-shared';
import { User } from '../entities';
import { CreateUser } from '../dtos';

export abstract class UserRepository
  implements
    Find<User>,
    FindOne<User>,
    CreateOne<User>,
    UpdateOne<User>,
    RemoveOne<User>
{
  abstract createOne(entity: CreateUser): Promise<User>;

  abstract find(params: FindParams<User>): Promise<Paged<User>>;

  abstract findOne(params: Partial<User>): Promise<User>;

  abstract updateOne(id: string, entity: Partial<User>): Promise<User>;

  abstract removeOne(idOrEntity: string | Partial<User>): Promise<User>;
}
