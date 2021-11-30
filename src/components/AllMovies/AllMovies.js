import MovieCard from './MovieCard';
import requests from '../../services/tmdbRequest';

function AllMovies() {
    return (
        <div className="all_movies">
            <MovieCard title='Trending Now' endpoint={requests.fetchTrending} />
            <MovieCard title='Upcoming' endpoint={requests.fetchUpcoming} />
            <MovieCard title='Latest' endpoint={requests.fetchLatest} />
            <MovieCard title='Top Rated' endpoint={requests.fetchTopRated} />
            <MovieCard title='Popular' endpoint={requests.fetchPopular} />
            <h1 className="delimeter"></h1>
        </div>
    )
}

export default AllMovies;