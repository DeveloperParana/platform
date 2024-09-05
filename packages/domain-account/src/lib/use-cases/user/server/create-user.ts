import { UserRepository } from '../../../repositories';
import { UseCase } from '@platform/util-shared';
import { CreateUser } from '../../../dtos';
import { User } from '../../../entities';

export class CreateUserServerUseCase implements UseCase<CreateUser, User> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: CreateUser): Promise<User> {
    return this.userRepository.createOne(data);
  }
}
