import { Observable } from 'rxjs';
import { Entity } from './entity';

export interface CreateOne<T extends Entity> {
  createOne(entity: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T> | Observable<T>;
}

