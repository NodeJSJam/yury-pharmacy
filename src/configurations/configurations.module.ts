import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseConfigService, DatabaseConfig } from './database';
import { AppConfig, AppConfigService } from './app';

@Module({
  imports: [ConfigModule.forRoot({ load: [DatabaseConfig, AppConfig], isGlobal: true })],
  providers: [DatabaseConfigService, AppConfigService],
  exports: [DatabaseConfigService, AppConfigService],
})
export class ConfigurationsModule {}
