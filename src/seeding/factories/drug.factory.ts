import { faker } from '@faker-js/faker';

import { define } from 'typeorm-seeding';

import { Drug } from '../../entities';

define(Drug, () => {
  const drug = new Drug();

  drug.barcode = faker.finance.iban();
  drug.title = faker.commerce.productName();
  drug.description = faker.commerce.productDescription();
  drug.byPrescription = Math.random() > 0.5;
  drug.manufacturer = faker.company.name();

  return drug;
});
