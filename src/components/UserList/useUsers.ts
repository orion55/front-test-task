import { getUsers, User } from '@/services';
import { useFetchData } from '@/hooks';

export const useUsers = () =>
  useFetchData<User[]>({
    fetchData: getUsers,
  });
