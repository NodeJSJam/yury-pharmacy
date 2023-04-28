import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationsModule } from './configurations/configurations.module';
import { DatabaseConfigService } from './configurations/database';
import { AppConfigService } from './configurations/app';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationsModule],
      inject: [DatabaseConfigService, AppConfigService],
      useFactory: async (databaseConfigService: DatabaseConfigService, appConfig: AppConfigService) => ({
        type: 'postgres',
        host: databaseConfigService.host,
        port: databaseConfigService.port,
        username: databaseConfigService.user,
        password: databaseConfigService.password,
        database: databaseConfigService.databaseName,
        synchronize: !appConfig.isProdaction,
      }),
    }),
    ConfigurationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
