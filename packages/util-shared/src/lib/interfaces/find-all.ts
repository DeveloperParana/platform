import { Observable } from 'rxjs';
import { Entity } from './entity';

export interface FindAll<T extends Entity> {
  findAll(): Promise<T[]> | Observable<T[]>;
}
