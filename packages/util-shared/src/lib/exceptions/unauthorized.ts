import { HttpException } from './http-exception';

export class UnauthorizedException extends HttpException {
  constructor(message = 'Unauthorized', statusCode = 401) {
    super(message, statusCode);
  }
}
