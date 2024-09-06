import {
  CreatePresentationComment,
  CreatePresentationLike,
  Presentation,
  PresentationComment,
  PresentationLike,
  PresentationRepository,
} from '@platform/domain-account';
import { FindParams, Paged } from '@platform/util-shared';
import { Repository, FindManyOptions } from 'typeorm';
import { PresentationEntity } from '../entities';
import { CreatePresentationDto } from '../dtos';

export class PresentationRepositoryImpl implements PresentationRepository {
  constructor(private readonly repository: Repository<PresentationEntity>) {}

  createOne(entity: CreatePresentationDto): Promise<PresentationEntity> {
    return this.repository.save(entity);
  }

  async find(params: FindParams<Presentation>): Promise<Paged<Presentation>> {
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
      where: props as PresentationEntity,
    };
    const [data, total] = await this.repository.findAndCount(options);

    return { data, total };
  }

  findOne(params: Partial<PresentationEntity>): Promise<PresentationEntity> {
    throw new Error('Method not implemented.');
  }

  updateOne(
    id: string,
    entity: Partial<PresentationEntity>
  ): Promise<PresentationEntity> {
    throw new Error('Method not implemented.');
  }

  removeOne(
    idOrEntity: string | Partial<PresentationEntity>
  ): Promise<PresentationEntity> {
    throw new Error('Method not implemented.');
  }

  createComment(
    entity: CreatePresentationComment
  ): Promise<PresentationComment> {
    throw new Error('Method not implemented.');
  }

  createLike(entity: CreatePresentationLike): Promise<PresentationLike> {
    throw new Error('Method not implemented.');
  }
}
