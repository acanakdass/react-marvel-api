import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import CharactersTable from './components/CharactersTable';
import axios from 'axios'
import SearchBox from './components/SearchBox';
// hash: 632c8aab4352e99960cdf721659f43ba



function App() {

  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')


  const hash = '632c8aab4352e99960cdf721659f43ba'
  const mainUrl = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=41e5da0cd9b2dfc901cb28f340d71b4b&hash=${hash}`
  const searchByNameUrl = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=41e5da0cd9b2dfc901cb28f340d71b4b&hash=${hash}`

  useEffect(() => {
    const fetchCharacters = async () => {
      if (query === '') {

        const result = await axios.get(mainUrl)
        console.log(result.data.data.results)
        setCharacters(result.data.data.results)
        setTimeout(() => setIsLoading(false), 1200)
      } else {
        const result = await axios.get(searchByNameUrl)
        console.log(result.data.data.results)
        setCharacters(result.data.data.results)
        setTimeout(() => setIsLoading(false), 1200)
      }

    }
    fetchCharacters()
  }, [query])
  return (
    <div className="container">
      <Header />
      <SearchBox searchFunc={(q) => setQuery(q)} />
      <CharactersTable charactersArray={characters} isLoading={isLoading} />
    </div>
  );
}

export default App;