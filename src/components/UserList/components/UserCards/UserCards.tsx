import { User } from '@/services';

interface UserTableProps {
  data: User[] | null;
}

export const UserCards = (props: UserTableProps) => {
  const { data } = props;

  if (!data) return null;

  return <h2>UserCards</h2>;
};
