import { FindParams } from './find-params';
import { Entity } from './entity';
import { Observable } from 'rxjs';

export interface Find<T extends Entity> {
  find(params: FindParams<T>): Promise<T[]> | Observable<T[]>;
}
