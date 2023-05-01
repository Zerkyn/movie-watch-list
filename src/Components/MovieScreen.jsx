
const MovieScreen = props => {
    const { page, setPage, movieList } = props

    const movieDisplay = movieList.map((el, i) => {
        return (
            <h2>{el.original_title}</h2>
        )
    })

    return (
        <div className="page">
            <h1>Ryan's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen