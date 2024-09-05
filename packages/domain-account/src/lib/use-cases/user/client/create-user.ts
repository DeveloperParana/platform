import { UseCase } from '@platform/util-shared';
import { UserService } from '../../../services';
import { CreateUser } from '../../../dtos';
import { User } from '../../../entities';
import { Observable } from 'rxjs';

export class CreateUserClientUseCase implements UseCase<CreateUser, User> {
  constructor(private readonly userService: UserService) {}

  execute(data: CreateUser): Observable<User> {
    return this.userService.createOne(data);
  }
}
