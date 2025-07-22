import logo from './logo.svg';
import './App.css';
import fetchRemoteFilms from './loader/loader';
import Card from './components/film_card';
import { ThemeProvider } from 'antd-style';
import { Input } from 'antd';
import React, { useEffect, useState } from 'react';


function App() {
  const [films, setFilms] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadFilms() {
      const data = await fetchRemoteFilms();
      setFilms(data);
    }
    loadFilms();
  }, []);

  const filteredKeys = Object.keys(films).filter(key =>
    key.toLowerCase().includes(search.toLowerCase())
  );

  const films_cards = filteredKeys.map(key =>
    <Card name={key} sources={films[key]} key={key}/>
  );

  return (
    <ThemeProvider appearance={'auto'}>
      <Input
        placeholder="Введите название фильма"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {films_cards}
    </ThemeProvider>
  );
}

export default App;
