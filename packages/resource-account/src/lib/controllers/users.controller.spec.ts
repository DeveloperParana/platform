import {
  provideJwtService,
  dataSourceAccountProviders,
  provideUserRepositoryTest,
} from '@platform/data-source-account';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

const userRepository = {
  createOne: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  updateOne: jest.fn(),
  removeOne: jest.fn()
}

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      imports: [
        JwtModule,
        TypeOrmModule,
      ],
      providers: [
        provideJwtService(JwtService),
        ...dataSourceAccountProviders,
        provideUserRepositoryTest(userRepository)
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
