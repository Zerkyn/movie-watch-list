import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header'
import axios from 'axios';
import MovieScreen from './Components/MovieScreen';
import WatchList from './Components/Watchlist';

function App() {
  const [movieList, setMovieList] = useState([])
  const [watchList, setWatchList] = useState([])
  const [page, setPage] = useState(1)


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        setMovieList(res.data.results)
      })
  }, [page])

  const addMovie = movie => {
    setWatchList([...watchList, movie])
  }

  const removeMovie = movie => {
    const newState = watchList.filter(el => {
      return el !== movie
    })
    setWatchList(newState)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          watchList={watchList}
          page={page}
          setPage={setPage}
          movieList={movieList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <WatchList
          watchList={watchList}
          removeMovie={removeMovie}
        />
      </main>
    </div>
  );
}

export default App;
