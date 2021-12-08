import MovieCard from './MovieCard';
import requests from '../../services/tmdbRequest';

export default function AllMovies() {
    return (
        <div className="all_movies">
            <MovieCard title='Trending Now' endpoint={requests.fetchTrending} />
            <MovieCard title='Upcoming' endpoint={requests.fetchUpcoming} />
            <MovieCard title='Latest' endpoint={requests.fetchLatest} />
            <MovieCard title='Top Rated' endpoint={requests.fetchTopRated} />
            <MovieCard title='Popular' endpoint={requests.fetchPopular} />
            <div className="delimeter"></div>
        </div>
    )
}