import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drug } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class DrugsService {
  constructor(@InjectRepository(Drug) private drugRepository: Repository<Drug>) {}

  async findAll(): Promise<Drug[]> {
    return await this.drugRepository.find({
      relations: {
        brand: true,
        pharmaciesDrugs: {
          pharmacy: true,
          drug: true,
        },
      },
    });
  }

  async findOne(id: string): Promise<Drug> {
    return await this.drugRepository.findOne({
      where: { id },
      relations: {
        brand: true,
        pharmaciesDrugs: true,
      },
    });
  }
}
