import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from '../entities';

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  providers: [BrandsService],
  controllers: [BrandsController],
})
export class BrandsModule {}
