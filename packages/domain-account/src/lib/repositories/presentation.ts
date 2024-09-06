import {
  Find,
  Paged,
  FindOne,
  CreateOne,
  FindParams,
  RemoveOne,
  UpdateOne,
} from '@platform/util-shared';
import {
  Presentation,
  PresentationComment,
  PresentationLike,
} from '../entities';
import {
  CreatePresentation,
  CreatePresentationComment,
  CreatePresentationLike,
} from '../dtos';

export abstract class PresentationRepository
  implements
    Find<Presentation>,
    FindOne<Presentation>,
    CreateOne<Presentation>,
    UpdateOne<Presentation>,
    RemoveOne<Presentation>
{
  abstract createOne(entity: CreatePresentation): Promise<Presentation>;

  abstract createComment(
    entity: CreatePresentationComment
  ): Promise<PresentationComment>;

  abstract createLike(
    entity: CreatePresentationLike
  ): Promise<PresentationLike>;

  abstract find(params: FindParams<Presentation>): Promise<Paged<Presentation>>;

  abstract findOne(params: Partial<Presentation>): Promise<Presentation>;

  abstract updateOne(
    id: string,
    entity: Partial<Presentation>
  ): Promise<Presentation>;

  abstract removeOne(
    idOrEntity: string | Partial<Presentation>
  ): Promise<Presentation>;
}
