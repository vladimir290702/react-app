import './NetflixDetails.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getNetflixMovieDetails from '../../services/getNetflixMovieDetails';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

export default function NetflixMovieDetails() {
    const { id } = useParams();
    const [currentMovie, setCurrentMovie] = useState({});
    const [trailerUrl, setTrailerUrl] = useState("")
    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        getNetflixMovieDetails(id)
            .then(data => {
                setCurrentMovie(data);

                movieTrailer(data.title)
                    .then(url => {
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailerUrl(urlParams.get('v'))
                    })
                    .catch(e => console.log(e))
            })
    }, [])

    return (
        <>
            <div className="details_container">
                <div className="details_section">
                    <img src={`${base_url}${currentMovie.poster_path}`} alt={currentMovie.original_title} className="details_image" />
                </div>

                <div className="movie_information">
                    <h1>Movie Title: <span>{currentMovie.original_title}</span> </h1>
                    <h2>Overview:  <span>{currentMovie.overview}</span></h2>
                    <h2>Release Date:  <span>{currentMovie.release_date}</span></h2>
                    <h2>Rating:  <span>{currentMovie.vote_average}/10</span></h2>
                    <h2>Runtime:  <span>{currentMovie.runtime} min.</span></h2>
                    <h2>Budget:  <span>${currentMovie.budget}</span></h2>
                </div>
            </div>

            <div className="video_section">
                {trailerUrl
                    ? <YouTube videoId={trailerUrl} className='video' />
                    : <h1>Sorry, this movie doesn't have any provided trailer!</h1>
                }
            </div>

            <div className="delimeter"></div>
        </>
    )
}
