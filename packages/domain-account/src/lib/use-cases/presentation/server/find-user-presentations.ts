import { FindParams, Paged, UseCase } from '@platform/util-shared';
import { PresentationRepository } from '../../../repositories';
import { User, Presentation } from '../../../entities';

export class FindUserPresentationsServerUseCase
  implements UseCase<FindParams<User>, Paged<Presentation>>
{
  constructor(private readonly userRepository: PresentationRepository) {}

  async execute(data: FindParams<User>): Promise<Paged<Presentation>> {
    return this.userRepository.find(data);
  }
}
