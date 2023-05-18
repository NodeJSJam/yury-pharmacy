import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationsModule } from './configurations/configurations.module';
import { DatabaseConfigService } from './configurations/database';
import { AppConfigService } from './configurations/app';
import { DrugsModule } from './drugs/drugs.module';
import { BrandsModule } from './brands/brands.module';
import { Brand, Drug, Pharmacy, PharmacyDrug } from './entities';

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
        entities: [Brand, PharmacyDrug, Drug, Pharmacy],
        seeds: ['src/seeding/seeds/**/*{.ts,.js}'],
        factories: ['src/seeding/factories/**/*{.ts,.js}'],
      }),
    }),
    ConfigurationsModule,
    DrugsModule,
    BrandsModule,
  ],
})
export class AppModule {}
