import { Entity } from './entity';
import { Observable } from 'rxjs';

export interface FindOne<T extends Entity> {
  findOne(params: Partial<T>): Promise<T> | Observable<T>;
}
