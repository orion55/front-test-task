import { Country, getCountries } from '@/services';
import { useFetchData } from '@/hooks';

export const useCountries = () =>
  useFetchData<Country[]>({
    fetchData: getCountries,
  });
