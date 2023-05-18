import { faker } from '@faker-js/faker';

import { define } from 'typeorm-seeding';

import { Pharmacy } from '../../entities';

define(Pharmacy, () => {
  const pharmacy = new Pharmacy();

  pharmacy.title = faker.system.fileName();
  pharmacy.location = faker.location.streetAddress();

  return pharmacy;
});
