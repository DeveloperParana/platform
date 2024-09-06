import {
  Find,
  Paged,
  CreateOne,
  FindParams,
  RemoveOne,
  UpdateOne,
} from '@platform/util-shared';
import { CreatePresentation } from '../dtos';
import { Presentation } from '../entities';
import { Observable } from 'rxjs';

export abstract class PresentationService
  implements
    CreateOne<Presentation>,
    Find<Presentation>,
    UpdateOne<Presentation>,
    RemoveOne<Presentation>
{
  abstract createOne(entity: CreatePresentation): Observable<Presentation>;

  abstract find(
    params: FindParams<Presentation>
  ): Observable<Paged<Presentation>>;

  abstract updateOne(
    id: string,
    entity: Partial<Presentation>
  ): Observable<Presentation>;

  abstract removeOne(
    idOrEntity: string | Partial<Presentation>
  ): Observable<Presentation>;
}
