
import { useState, useEffect } from "react";
const base_url = "https://image.tmdb.org/t/p/original";

function MovieCard({ title, endpoint }) {
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
            <h1>{title}</h1>


        </div> 
    )
}

export default MovieCard;