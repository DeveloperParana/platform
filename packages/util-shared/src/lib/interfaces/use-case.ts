import { Observable } from 'rxjs';

export interface UseCase<I, O> {
  execute(data: I): Promise<O> | Observable<O>;
}
