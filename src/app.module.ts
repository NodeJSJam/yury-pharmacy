import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationsModule } from './configurations/configurations.module';
import { DatabaseConfigService } from './configurations/database';
import { AppConfigService } from './configurations/app';
import { DrugsModule } from './drugs/drugs.module';
import { BrandsModule } from './brands/brands.module';

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
        autoLoadEntities: true,
      }),
    }),
    ConfigurationsModule,
    DrugsModule,
    BrandsModule,
  ],
})
export class AppModule {}
