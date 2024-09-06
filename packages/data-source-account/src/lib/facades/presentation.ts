import { FindParams } from '@platform/util-shared';
import { CreatePresentationDto } from '../dtos';
import {
  User,
  FindUserPresentationsServerUseCase,
  CreatePresentationServerUseCase,
} from '@platform/domain-account';

export class PresentationFacade {
  constructor(
    private readonly createPresentationUseCase: CreatePresentationServerUseCase,
    private readonly findUserPresentationsUseCase: FindUserPresentationsServerUseCase
  ) {}

  createPresentation(data: CreatePresentationDto) {
    return this.createPresentationUseCase.execute(data);
  }

  find(data: FindParams<User>) {
    return this.findUserPresentationsUseCase.execute(data);
  }
}
