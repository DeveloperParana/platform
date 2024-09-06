import { BadRequestException, UseCase } from '@platform/util-shared';
import { UserRepository } from '../../../repositories';
import { CryptoService } from '../../../ports';
import { User } from '../../../entities';
import { SignUp } from '../../../dtos';

export class SignUpServerUseCase implements UseCase<SignUp, User> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly cryptoService: CryptoService
  ) {}

  async execute({ password: pass, ...signUp }: SignUp): Promise<User> {
    try {
      const password = this.cryptoService.hash(pass);

      return this.userRepository.createOne({
        ...signUp,
        roles: ['member'],
        password,
      });
    } catch {
      throw new BadRequestException();
    }
  }
}
