import { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?apikey=e52c8c26';

function App() {

  const [movies, setMovies] = useState([]);
  const [result, setResult] = useState('');

  const searchMoives = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}&page=10`);
    const data = await response.json();
    if (data.Response === 'True') {
      console.log(data.Search);
      const listMovie = data.Search.map((movie, index) => {
        return <MovieCard key={'movie-' + index} movie={movie} />
      });
      setMovies(listMovie);
      setResult('');
    }
    else {
      setMovies([]);
      if (data.Error === 'Movie not found!') {
        setResult('Movie not found');
      }
      if (data.Error === 'Too many results.') {
        setResult('Too many results. Please search certain key!');
      }
    }
  };

  useEffect(() => {
    searchMoives('Marvel');
  }, []);

  const onSubmitFormSearch = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const title = form.get('title');
    searchMoives(title);
  }

  return (
    <div className="App">
      <div className="App-bg">
        <h1>MovieLand</h1>
        <div className="search">
          <form onSubmit={onSubmitFormSearch}>
            <input type="text" name="title" placeholder="Search for movies" defaultValue="Marvel" />
            <button type="submit">Search</button>
          </form>
        </div>
        <ul className="movie-list">{movies}</ul>
        <div>{result}</div>
      </div>

    </div>
  );
}

export default App;