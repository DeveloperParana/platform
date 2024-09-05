import { Observable } from 'rxjs';
import { Entity } from './entity';

export interface UpdateOne<T extends Entity> {
  updateOne(id: string, entity: Partial<T>): Promise<T> | Observable<T>;
}
