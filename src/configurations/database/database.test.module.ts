import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand, Drug } from '../../entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [Brand, Drug],
      synchronize: true,
    }),
  ],
})
export class DatabaseTestModule {}
