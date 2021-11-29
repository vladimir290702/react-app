import './MovieDetails.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovieDetails from '../../services/getMovieDetails';
import { useAuth } from '../../contexts/authContext';

export default function MovieDetails() {
    const { movieId } = useParams();
    const [currentMovie, setCurrentMovie] = useState({});
    const { currentUser } = useAuth();
    let email;

    if (currentUser) {
        email = currentUser.email;
    }


    useEffect(() => {
        getMovieDetails(movieId)
            .then(data => {
                setCurrentMovie(data);
            })
    }, [])

    return (
        <div className="details_container">
            <section className="details_section">
                <img src={currentMovie.imageUrl} alt={currentMovie.name} className="details_image" />

                {
                    email === currentMovie.creator
                        ? (
                            <div className="creator_buttons">
                                <a href={`/edit/${currentMovie.movieId}`} className="personal_btn">Edit</a>
                                <a href={`/delete/${currentMovie.movieId}`} className="personal_btn">Delete</a>
                            </div>
                        )
                        :
                        <div className="creator_buttons">
                            <a href={`/add-to-favourites/${currentMovie.movieId}`} className="personal_btn_guest">Add to favourites</a>
                        </div>
                }
            </section>

            <div className="movie_information">
                <h1>Movie Title: <span>{currentMovie.name}</span> </h1>
                <h2>Overview:  <span>{currentMovie.overview}</span></h2>
                <h2>Genre:  <span>{currentMovie.genre}</span></h2>
                <h2>Rating:  <span>{currentMovie.rating}/10</span></h2>
                <h2>Runtime:  <span>{currentMovie.runtime}</span></h2>
                <h2>Budget:  <span>${currentMovie.budget}</span></h2>
            </div>
        </div>
    )
}
