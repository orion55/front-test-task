import userData from './users_data.json';
import { User } from './user.types.ts';
import { Country } from './country.types.ts';

const DELAY = 1000;

export const getCountries = async (): Promise<Country[]> => {
  const COUNTRIES: Country[] = [
    { id: 1, name: 'Россия' },
    { id: 2, name: 'США' },
    { id: 3, name: 'Великобритания' },
    { id: 4, name: 'Казахстан' },
    { id: 5, name: 'Нидерланды' },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(COUNTRIES);
    }, DELAY);
  });
};

export const getUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userData);
    }, DELAY);
  });
};
