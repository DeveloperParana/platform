import { PresentationRepository } from '../../../repositories';
import { CreatePresentation } from '../../../dtos';
import { Presentation } from '../../../entities';
import { UseCase } from '@platform/util-shared';

export class CreatePresentationServerUseCase
  implements UseCase<CreatePresentation, Presentation>
{
  constructor(private readonly userRepository: PresentationRepository) {}

  async execute(data: CreatePresentation): Promise<Presentation> {
    return this.userRepository.createOne(data);
  }
}
