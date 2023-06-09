import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: ['src/entities/**/*.entity.ts'],
      synchronize: true,
    }),
  ],
})
export class DatabaseTestModule {}
