import { PresentationService } from '../../../services';
import { CreatePresentation } from '../../../dtos';
import { Presentation } from '../../../entities';
import { UseCase } from '@platform/util-shared';
import { Observable } from 'rxjs';

export class CreatePresentationClientUseCase implements UseCase<CreatePresentation, Presentation> {
  constructor(private readonly presentationService: PresentationService) {}

  execute(data: CreatePresentation): Observable<Presentation> {
    return this.presentationService.createOne(data);
  }
}
