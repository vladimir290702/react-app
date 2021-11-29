import './MovieDetails.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovieDetails from '../../services/getMovieDetails';
import { useAuth } from '../../contexts/authContext';
import deleteMovie from '../../services/deleteMovieService';

export default function MovieDetails() {
    const { movieId } = useParams();
    const [currentMovie, setCurrentMovie] = useState({});
    const { currentUser } = useAuth();
    const navigate = useNavigate();

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

    const onMovieDelete = (e) => {
        e.preventDefault();

        deleteMovie(movieId)
        .then(res => {
            navigate('/');
        })
    }

    return (
        <div className="details_container">
            <section className="details_section">
                <img src={currentMovie.imageUrl} alt={currentMovie.name} className="details_image" />

                {
                    email === currentMovie.creator
                        ? (
                            <div className="creator_buttons">
                                <Link to={`/edit/${currentMovie.movieId}`} className="personal_btn">Edit</Link>
                                <Link to='#' onClick={onMovieDelete} className="personal_btn">Delete</Link>
                            </div>
                        )
                        : (
                            <div className="creator_buttons">
                                <Link to={`/add-to-favourites/${currentMovie.movieId}`} className="personal_btn_guest">Add to favourites</Link>
                            </div>
                        )
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
