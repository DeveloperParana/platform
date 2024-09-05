import { Observable } from 'rxjs';
import { Entity } from './entity';

export interface RemoveOne<T extends Entity> {
  removeOne(idOrEntity: string | Partial<T>): Promise<T> | Observable<T>;
}
