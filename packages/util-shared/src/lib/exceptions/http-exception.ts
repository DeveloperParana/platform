export class HttpException {
  constructor(public message: string, public statusCode: number) {}
}
