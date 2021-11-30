import { useParams, Link } from 'react-router-dom';
import './AllMovieAddictMovies.css'
import { useState, useEffect } from 'react';
import getAllMovies from '../../services/getAllMoviesService';

function AllMovieAddictMovies() {
    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {
        getAllMovies()
            .then(data => {
                setAllMovies(data);
            })
    }, []);

    return (
        <div id="all_movies">
            <h1 id="title">All Movies</h1>

            <div className="movie-addict-movies">
                {
                    allMovies.length > 0
                        ? allMovies.map(x => (
                            <>
                                <span key={x.id} className='all-added-movies'>
                                    <Link to={`/details/${x.id}`}>
                                        <img src={x.imageUrl} alt={x.name} className='all-movies-image' />
                                    </Link>
                                </span>
                            </>
                        ))
                        : <h1>Sorry we don't have any added movies yet!</h1>
                }
            </div>
        </div>
    )
}

export default AllMovieAddictMovies;