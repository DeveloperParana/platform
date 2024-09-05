import { FindParams, UseCase } from '@platform/util-shared';
import { UserRepository } from '../../../repositories';
import { User } from '../../../entities';

export class FindUsersServerUseCase
  implements UseCase<FindParams<User>, User[]>
{
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: FindParams<User>): Promise<User[]> {
    return this.userRepository.find(data);
  }
}
