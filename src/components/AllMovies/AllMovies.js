import MovieCard from './MovieCard';
import requests from '../../services/tmdbRequest';

function AllMovies() {
    return (
        <div className="all_movies">
            <MovieCard
                title='NETFLIX ORIGINALS'
                endpoint={requests.fetchNetflixOriginals}
                isLarge
            />
            <MovieCard title='Trending Now' endpoint={requests.fetchTrending} />
            <MovieCard title='Top Rated' endpoint={requests.fetchTopRated} />
            <MovieCard title='Action Movies' endpoint={requests.fetchActionMovies} />
            <MovieCard title='Comedy Movies' endpoint={requests.fetchComedyMovies} />
            <MovieCard title='Horror Movies' endpoint={requests.fetchHorrorMovies} />
            <MovieCard title='Romance Movies' endpoint={requests.fetchRomanceMovies} />
            <MovieCard title='Documentaries' endpoint={requests.fetchDocumentaries} />
            <h1 className="delimeter"></h1>
        </div>

    )
}

export default AllMovies;