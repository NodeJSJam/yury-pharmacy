import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  port: string = this.configService.get('app.port');

  isProdaction: boolean = this.configService.get('app.isProdaction');
}
