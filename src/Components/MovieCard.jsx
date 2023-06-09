
const MovieCard = props => {
    const { movie, addMovie, removeMovie, watchList } = props

    const inWatchList = watchList.filter(el => {
        return el.id === movie.id
    })

    const button = inWatchList.length === 0 ?
        (<button onClick={() => { addMovie(movie) }}>Add to List</button>)
        : (<button onClick={() => { removeMovie(movie) }}>Remove</button>)

    return (
        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie poster" />
                <h3>{movie.original_title}</h3>
            </div>
            {button}
        </div>
    )
}

export default MovieCard