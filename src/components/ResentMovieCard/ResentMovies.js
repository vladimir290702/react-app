import ResentMovieCard from './ResentMovieCard';
import getResentMovies from '../../services/getResentMovies';
import { useState, useEffect } from 'react';

export default function ResentMovies() {
    const [resentMovies, setResentMovies] = useState([]);

    useEffect(() => {
        getResentMovies()
            .then(data => {
                setResentMovies(data);
            })

    }, [])
    return (
        <>
            <div className="resent_title">
                <h1>Recently Added Movies</h1>
            </div>
            <div className="resent_movies">
                {
                    resentMovies.length > 0
                        ? resentMovies.map(movie =>
                        (
                            <div className="resent_movie" key={movie.id}>
                                <ResentMovieCard key={movie.id} resentMovies={movie} />
                            </div>
                        ))
                        : <h2>No movies yet!</h2>
                }
            </div>
        </>
    )
}
