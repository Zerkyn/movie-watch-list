import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header'
import axios from 'axios';
import MovieScreen from './Components/MovieScreen';

function App() {
  const [movieList, setMovieList] = useState([])
  const [watchList, setWatchList] = useState([])
  const [page, setPage] = useState(1)

  const getData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        setMovieList(res.data.results)
      })
  }

  useEffect(() => {
    getData()
  }, [page])

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          // list={list}
          page={page}
          setPage={setPage}
          movieList={movieList}
        />
      </main>
    </div>
  );
}

export default App;
