import { faker } from '@faker-js/faker';

import { define } from 'typeorm-seeding';

import { PharmacyDrug } from '../../entities';

define(PharmacyDrug, () => {
  const pharmacyDrug = new PharmacyDrug();

  pharmacyDrug.price = faker.number.float({ min: 100, max: 2000, precision: 2 });
  pharmacyDrug.quantity = faker.number.int({ min: 0, max: 100 });

  return pharmacyDrug;
});
