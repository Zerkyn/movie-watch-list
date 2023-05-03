import MovieCard from "./MovieCard"

const MovieScreen = props => {
    let { page, setPage, movieList, watchList, addMovie, removeMovie } = props

    const decrement = () => {
        setPage(page - 1)
    }

    const increment = () => {
        setPage(page + 1)
    }

    const movieDisplay = movieList.map((el, i) => {
        return (
            <MovieCard
                movie={el}
                key={el.id}
                addMovie={addMovie}
                removeMovie={removeMovie}
                watchList={watchList}
            />
        )
    })

    return (
        <div className="page">
            <h1>Movie Theatre</h1>
            <h3 style={{ color: '#b66d0d' }}>Add a movie to your watchlist</h3>
            <div className="btn-container">
                <button onClick={page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen