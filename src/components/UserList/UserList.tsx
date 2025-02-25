import { useMediaQuery } from 'react-responsive';
import { useUsers } from './useUsers.ts';
import { Spinner } from '../Spinner';
import { UserCards } from './components/UserCards';
import { UserTable } from './components/UserTable';

export const UserList = () => {
  const { data, loading, error } = useUsers();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className='font-feature-default flex w-full flex-col justify-center font-sf antialiased animate-in fade-in zoom-in'>
      <h2 className='mb-8 text-center text-[28px] font-bold'>Список пользователей</h2>

      {error && (
        <div className='mb-4 text-center text-red-500'>
          <p>Произошла ошибка при загрузке данных. Попробуйте снова.</p>
        </div>
      )}

      {loading ? (
        <Spinner />
      ) : (
        <>{isMobile ? <UserCards data={data} /> : <UserTable data={data} />}</>
      )}
    </div>
  );
};
