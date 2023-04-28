import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  user: string = this.configService.get('database.user');

  password: string = this.configService.get('database.password');

  databaseName: string = this.configService.get('database.databaseName');

  host: string = this.configService.get('database.host');

  port: number = this.configService.get('database.port');
}
