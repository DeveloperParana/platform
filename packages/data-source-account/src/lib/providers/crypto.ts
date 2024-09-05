import { CryptoService } from '@platform/domain-account';
import { Provider, Type } from '@platform/util-shared';

export function provideCryptoService(Service: Type<CryptoService>): Provider {
  return {
    provide: CryptoService,
    useClass: Service,
  };
}
