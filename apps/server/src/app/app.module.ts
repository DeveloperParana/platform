import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceAccountModule } from '@platform/resource-account';
import { dataSourceAccountEntities } from '@platform/data-source-account';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { env } from '../envs/env';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: env.db.password,
      database: env.db.name,
      entities: [...dataSourceAccountEntities],
      synchronize: true,
    }),
    ResourceAccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
