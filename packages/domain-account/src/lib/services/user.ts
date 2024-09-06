import {
  Find,
  CreateOne,
  FindParams,
  RemoveOne,
  UpdateOne,
  Paged,
} from '@platform/util-shared';
import { User } from '../entities';
import { Observable } from 'rxjs';
import { CreateUser } from '../dtos';

export abstract class UserService
  implements CreateOne<User>, Find<User>, UpdateOne<User>, RemoveOne<User>
{
  abstract createOne(entity: CreateUser): Observable<User>;

  abstract find(params: FindParams<User>): Observable<Paged<User>>;

  abstract updateOne(id: string, entity: Partial<User>): Observable<User>;

  abstract removeOne(idOrEntity: string | Partial<User>): Observable<User>;
}
