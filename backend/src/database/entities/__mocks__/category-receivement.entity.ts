import faker from 'faker';

export const CategoryReceivement = {
  id: faker.random.uuid(),
  title: faker.random.words(),
  description: faker.random.words(),
};
