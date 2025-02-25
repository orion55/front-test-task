import { useEffect, useState } from 'react';

type UseFetchDataProps<T> = {
  fetchData: () => Promise<T>;
};

export const useFetchData = <T>({ fetchData }: UseFetchDataProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setData(null);
        setError('Ошибка при загрузке данных');
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [fetchData]);

  return { data, loading, error };
};
