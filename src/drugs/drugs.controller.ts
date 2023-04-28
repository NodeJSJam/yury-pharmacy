import { Controller, Get } from '@nestjs/common';
import { DrugsService } from './drugs.service';

@Controller('drugs')
export class DrugsController {
  constructor(private readonly drugsService: DrugsService) {}

  @Get()
  async findAll() {
    return await this.drugsService.findAll();
  }

  @Get(':id')
  async findOne(id: string) {
    return await this.drugsService.findOne(id);
  }
}
