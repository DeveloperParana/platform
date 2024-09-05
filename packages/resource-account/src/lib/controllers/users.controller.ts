import { CreateUserDto, UserFacade } from '@platform/data-source-account';
import { SortOrder } from '@platform/util-shared';
import {
  Get,
  Post,
  Body,
  Query,
  Controller,
  BadRequestException,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly userFacade: UserFacade) {
    console.log(userFacade['findUsersUseCase']);

  }

  @Get()
  find(
    @Query('page') page = 1,
    @Query('size') size = 10,
    @Query('prop') prop = 'firstName',
    @Query('sort') sort: SortOrder = 'ASC',
    @Query('sort') props = {}
  ) {
    return this.userFacade.find({ page, size, prop, sort, props });
  }

  @Post()
  createUser(@Body() data: CreateUserDto) {
    try {
      return this.userFacade.createUser(data);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
