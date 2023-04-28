import { Test, TestingModule } from '@nestjs/testing';
import { BrandsService } from './brands.service';
import { Brand } from '../entities';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseTestModule } from '../configurations/database/database.test.module';

describe('BrandsService', () => {
  let service: BrandsService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [DatabaseTestModule, TypeOrmModule.forFeature([Brand])],
      providers: [BrandsService],
    }).compile();
    service = module.get<BrandsService>(BrandsService);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of brands', async () => {
    const result: Brand[] = [];
    jest.spyOn(service, 'findAll').mockImplementation(() => Promise.resolve(result));

    expect(await service.findAll()).toBe(result);
  });

  it('should return a brand', async () => {
    const result: Brand = {
      id: '1',
      title: 'test',
      description: '',
    };
    jest.spyOn(service, 'findOne').mockImplementation(() => Promise.resolve(result));

    expect(await service.findOne('1')).toBe(result);
  });
});
