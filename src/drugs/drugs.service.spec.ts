import { Test, TestingModule } from '@nestjs/testing';
import { DrugsService } from './drugs.service';
import { Drug } from '../entities';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseTestModule } from '../configurations/database/database.test.module';

describe('DrugsService', () => {
  let service: DrugsService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [DatabaseTestModule, TypeOrmModule.forFeature([Drug])],
      providers: [DrugsService],
    }).compile();
    service = module.get<DrugsService>(DrugsService);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of drugs', async () => {
    const result: Drug[] = [];
    jest.spyOn(service, 'findAll').mockImplementation(() => Promise.resolve(result));

    expect(await service.findAll()).toBe(result);
  });

  it('should return a drug', async () => {
    const result: Drug = {
      id: '1',
      title: 'test',
      description: '',
      brand: { id: '1', title: 'test', description: '' },
      byPrescription: false,
      barcode: '',
      manufacturer: '',
    };
    jest.spyOn(service, 'findOne').mockImplementation(() => Promise.resolve(result));

    expect(await service.findOne('1')).toBe(result);
  });
});
