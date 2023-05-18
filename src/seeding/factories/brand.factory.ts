import { faker } from '@faker-js/faker';

import { define } from 'typeorm-seeding';

import { Brand } from '../../entities';

define(Brand, () => {
  const brand = new Brand();

  brand.title = faker.company.name();
  brand.description = faker.lorem.paragraph(1);

  return brand;
});
