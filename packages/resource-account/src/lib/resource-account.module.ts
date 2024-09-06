import {
  UserEntity,
  provideJwtService,
  dataSourceAccountProviders,
  PresentationEntity,
  PresentationCommentEntity,
  PresentationLikeEntity,
} from '@platform/data-source-account';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import {
  AuthController,
  UsersController,
  PresentationsController,
} from './controllers';

@Module({
  controllers: [AuthController, UsersController, PresentationsController],
  imports: [
    JwtModule.register({
      global: true,
      secret: 'jwtsecret',
      signOptions: { expiresIn: '3600s' },
    }),
    TypeOrmModule.forFeature([
      UserEntity,
      PresentationEntity,
      PresentationCommentEntity,
      PresentationLikeEntity,
    ]),
  ],
  providers: [provideJwtService(JwtService), ...dataSourceAccountProviders],
  exports: [],
})
export class ResourceAccountModule {}
