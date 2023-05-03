import MovieCard from "./MovieCard"

const WatchList = props => {
    const { watchList, removeMovie } = props

    const movieDisplay = watchList.map((el, i) => {
        return (
            <MovieCard
                movie={el}
                key={el.id}
                removeMovie={removeMovie}
                watchList={watchList}
            />
        )
    })

    return (
        <div className="watchlist">
            <h1>My Watch list</h1>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default WatchList