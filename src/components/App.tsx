import { useEffect, useState } from 'react';
import { Response } from '../types/data';
import getRandomNumber from '../utils/getRandomNumber';
import Section from './Section';

const Urls = [
  'https://rcslabs.ru/ttrp1.json',
  'https://rcslabs.ru/ttrp2.json',
  'https://rcslabs.ru/ttrp3.json',
  'https://rcslabs.ru/ttrp4.json',
  'https://rcslabs.ru/ttrp5.json',
];

const App = () => {
  const [data, setData] = useState<Response | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const max = Urls.length - 1;
    const index = getRandomNumber(0, max);
    const url = Urls[index]; // для разнообразия, подгружаем каждый раз разные данные

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => setError('Произошла ошибка запроса данных'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      {loading && 'Загрузка данных ...'}
      {error}
      {data && <Section data={data} />}
    </div>
  );
};

export default App;
