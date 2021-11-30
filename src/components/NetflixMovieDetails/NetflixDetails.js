import './NetflixDetails.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getNetflixMovieDetails from '../../services/getNetflixMovieDetails';

export default function NetflixMovieDetails() {
    const { id } = useParams();
    const [currentMovie, setCurrentMovie] = useState({});
    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        getNetflixMovieDetails(id)
            .then(data => {
                console.log(data);
                setCurrentMovie(data);
            })
    }, [])

    return (
        <div className="details_container">
            <section className="details_section">
                <img src={`${base_url}${currentMovie.poster_path}`} alt={currentMovie.original_title} className="details_image" />

            </section>

            <div className="movie_information">
                <h1>Movie Title: <span>{currentMovie.original_title}</span> </h1>
                <h2>Overview:  <span>{currentMovie.overview}</span></h2>
                <h2>Release Date:  <span>{currentMovie.release_date}</span></h2>
                <h2>Rating:  <span>{currentMovie.vote_average}/10</span></h2>
                <h2>Runtime:  <span>{currentMovie.runtime} min.</span></h2>
                <h2>Budget:  <span>${currentMovie.budget}</span></h2>
            </div>
        </div>
    )
}
