import { faker } from '@faker-js/faker';
import { Factory, Seeder } from 'typeorm-seeding';

import { Drug, Brand, Pharmacy, PharmacyDrug } from '../../entities';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const brands = await factory(Brand)().createMany(10);
    const pharmacies = await factory(Pharmacy)().createMany(5);

    for (const brand of brands) {
      const drugs = await factory(Drug)()
        .map(async drug => {
          drug.brand = brand;

          return drug;
        })
        .createMany(faker.number.int({ min: 5, max: 10 }));

      for (const pharmacy of pharmacies) {
        for (const drug of drugs) {
          await factory(PharmacyDrug)()
            .map(async pharmacyDrug => {
              pharmacyDrug.pharmacy = pharmacy;
              pharmacyDrug.drug = drug;

              return pharmacyDrug;
            })
            .create();
        }
      }
    }
  }
}
