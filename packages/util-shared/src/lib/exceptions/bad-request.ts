import { HttpException } from './http-exception';

export class BadRequestException extends HttpException {
  constructor(message = 'BadRequest', statusCode = 400) {
    super(message, statusCode);
  }
}
