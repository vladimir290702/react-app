import { useState, useEffect } from 'react';
import requests from '../../services/tmdbRequest';
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await fetch(requests.fetchNetflixOriginals);
            const data = await request.json();

            let randomMovie = Math.floor(Math.random() * data.results.length - 1);
            setMovie(data.results[randomMovie]);

            return data;
        }
        fetchData();
    }, [])

    return (
        <div className="banner"
            style={
                {
                    backgroundSize: "cover",
                    backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )` ,
                    backgroundPosition: "center center",
                }
            }>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

                <h1 className='banner_description'>{movie?.overview}</h1>
            </div>
        </div>
    )
}

export default Banner;
