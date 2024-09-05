import { Provider, Type } from '@platform/util-shared';
import { JwtService } from '@platform/domain-account';

export function provideJwtService(Service: Type<JwtService>): Provider {
  return {
    provide: JwtService,
    useClass: Service,
  };
}
