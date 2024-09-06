import { FindParams, Paged, UseCase } from '@platform/util-shared';
import { UserRepository } from '../../../repositories';
import { User } from '../../../entities';

export class FindUsersServerUseCase
  implements UseCase<FindParams<User>, Paged<User>>
{
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: FindParams<User>): Promise<Paged<User>> {
    return this.userRepository.find(data);
  }
}
