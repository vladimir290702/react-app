import MovieCard from './MovieCard';
import requests from '../../services/tmdbRequest';

function AllMovies() {
    return (
        <>
            <MovieCard title='NETFLIX ORIGINALS' endpoint={requests.fetchNetflixOriginals} />
            <MovieCard title='Trending Now' endpoint={requests.fetchTrending} />

        </>
    )
}

export default AllMovies;