import './App.css';
import fetchRemoteFilms from './loader/loader';
import Card from './components/film_card';
import { ThemeProvider } from 'antd-style';
import { Typography, Input } from 'antd';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';


function App() {
  const [films, setFilms] = useState({});
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    async function loadFilms() {
      const data = await fetchRemoteFilms();
      setFilms(data);
    }
    loadFilms();
  }, []);

  const toggleFilter = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter(f => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const filteredKeys = Object.keys(films).filter(key =>
    key.toLowerCase().includes(search.toLowerCase())
  ).filter(key => {
    if (filters.length === 0) return true;
    return films[key].some(link => {
      if (filters.includes('tg') && link.includes('t.me')) return true;
      if (filters.includes('vk') && link.includes('vk.com')) return true;
      return false;
    });
  });

  const films_cards = filteredKeys.map(key =>
    <Card name={key} sources={films[key]} key={key}/>
  );

  return (
    <ThemeProvider appearance={'auto'}>
      <div className="container mx-auto mt-4 p-4">
        <Typography.Title level={2}>Записи стримов с фильмами с канала <a href='https://www.twitch.tv/zubarefff'>@zubarefff</a></Typography.Title>
        <div className="flex items-center mb-4">
          <Input
            placeholder="Введите название фильма"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="mr-2"
            size="large"
          />
          <div className="flex items-center space-x-2">
            <button
              className={`px-4 py-2 rounded ${filters.includes('tg') ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => toggleFilter('tg')}
            >
              TG
            </button>
            <button
              className={`px-4 py-2 rounded ${filters.includes('vk') ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => toggleFilter('vk')}
            >
              VK
            </button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {films_cards.length > 0 ? (
            films_cards
          ) : (
            <div className="text-center col-span-full text-lg">
              Упс. Такого у нас нет 😢
            </div>
          )}
        </div>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
