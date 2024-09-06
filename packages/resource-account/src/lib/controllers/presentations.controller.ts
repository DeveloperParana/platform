import {
  PresentationFacade,
  CreatePresentationDto,
} from '@platform/data-source-account';
import { SortOrder } from '@platform/util-shared';
import {
  Get,
  Post,
  Body,
  Query,
  Controller,
  BadRequestException,
} from '@nestjs/common';

@Controller('presentations')
export class PresentationsController {
  constructor(private readonly presentationFacade: PresentationFacade) {}

  @Get()
  find(
    @Query('page') page = 1,
    @Query('size') size = 10,
    @Query('prop') prop = 'title',
    @Query('sort') sort: SortOrder = 'ASC',
    @Query('sort') props = {}
  ) {
    return this.presentationFacade.find({ page, size, prop, sort, props });
  }

  @Post()
  createPresentation(@Body() data: CreatePresentationDto) {
    try {
      return this.presentationFacade.createPresentation(data);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
