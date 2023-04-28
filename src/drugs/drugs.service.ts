import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drug } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class DrugsService {
  constructor(@InjectRepository(Drug) private drugRepository: Repository<Drug>) {}

  async findAll(): Promise<Drug[]> {
    return await this.drugRepository.find();
  }

  async findOne(id: string): Promise<Drug> {
    return await this.drugRepository.findOne({ where: { id } });
  }
}
