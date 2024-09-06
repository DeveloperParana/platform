import { FindParams } from './find-params';
import { Entity } from './entity';
import { Observable } from 'rxjs';
import { Paged } from './paged';

export interface Find<T extends Entity> {
  find(params: FindParams<T>): Promise<Paged<T>> | Observable<Paged<T>>;
}
