import {
  UserEntity,
  provideJwtService,
  dataSourceAccountProviders,
} from '@platform/data-source-account';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersController, AuthController } from './controllers';
import { Module } from '@nestjs/common';

console.log(dataSourceAccountProviders);


@Module({
  controllers: [AuthController, UsersController],
  imports: [
    JwtModule.register({
      global: true,
      secret: 'jwtsecret',
      signOptions: { expiresIn: '3600s' },
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [provideJwtService(JwtService), ...dataSourceAccountProviders],
  exports: [],
})
export class ResourceAccountModule {}
