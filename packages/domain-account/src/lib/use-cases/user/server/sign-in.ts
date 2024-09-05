import { UnauthorizedException, UseCase } from '@platform/util-shared';
import { CryptoService, JwtService } from '../../../ports';
import { UserRepository } from '../../../repositories';
import { AccessToken, SignIn } from '../../../dtos';

export class SignInServerUseCase implements UseCase<SignIn, AccessToken> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService
  ) {}

  async execute({ username, password }: SignIn): Promise<AccessToken> {
    const user = await this.userRepository.findOne({ username });

    if (!user) {
      throw new UnauthorizedException();
    }

    const isValidPassword = this.cryptoService.compare(password, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      roles: user.roles,
      email: user.email,
      username: user.username,
      firstName: user.firstName,
    };

    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
