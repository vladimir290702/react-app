import './MovieCard.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const base_url = "https://image.tmdb.org/t/p/original";

export default function MovieCard({ title, endpoint }) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
            })
    }, [])

    return (
        <div className="row">
            <h1 className='movie_title'>{title}</h1>

            <div className="row_posters">
                {movies.map(movie => (
                    <Link to={`/details/netflix/${movie.id}`} key={movie.id}>
                        <img
                            className={`row_poster`}
                            src={`${base_url}${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}