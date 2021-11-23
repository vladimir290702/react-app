import './MovieCard.css';
import { useState, useEffect } from "react";
const base_url = "https://image.tmdb.org/t/p/original";

function MovieCard({ title, endpoint, isLarge }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch(endpoint);
            let data = await response.json();
            setMovies(data.results);
            return data;
        }
        fetchData();
    }, [])

    return (
        <div className="row">
            <h1 className='movie_title'>{title}</h1>

            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    className={`row_poster ${isLarge && 'row_posterLarge'}`}
                    src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default MovieCard;