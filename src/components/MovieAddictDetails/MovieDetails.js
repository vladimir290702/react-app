import './MovieDetails.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovieDetails from '../../services/getMovieDetails';
import { useAuth } from '../../contexts/authContext';
import deleteMovie from '../../services/deleteMovieService';
import addMovieToFavourites from '../../services/addMovieToFavouritesService';
import removeMovieFromFavourites from '../../services/removeMovieFromFavourites';
import { toast } from 'react-toastify';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

export default function MovieDetails() {
    const { movieId } = useParams();
    const [currentMovie, setCurrentMovie] = useState({});
    const [trailerUrl, setTrailerUrl] = useState("");
    const [ifAdded, setIfAdded] = useState(false);
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

                movieTrailer(data.name)
                    .then(url => {
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailerUrl(urlParams.get('v'))
                    })
                    .catch(e => {
                        setTrailerUrl(undefined);
                    })

                if ((data.favouriteTo)) {
                    let favArray = Object.values(data.favouriteTo);

                    if (favArray.includes(email)) {
                        setIfAdded(true);
                    }
                }
            })
    }, [])

    const onMovieDelete = (e) => {
        e.preventDefault();

        deleteMovie(movieId)
            .then(res => {
                toast.success('Successfully deleted movie', {
                    className: 'notification',
                });
                navigate('/');
            })
    }

    const onAddMovieToFavourites = (e) => {
        e.preventDefault();

        addMovieToFavourites(movieId, currentUser)
            .then(res => {
                toast.success('Successfully added to your favourite movies', {
                    className: 'notification',
                });
                navigate('/');
            })
    }

    const onRemoveFromFavourites = (e) => {
        e.preventDefault();

        removeMovieFromFavourites(movieId, currentUser)
            .then(res => {
                console.log(res);
                toast.success('Successfully removed movie from favourites!', {
                    className: 'notification',
                })
                navigate(`/`);
            })
    }

    return (
        <>
            <div className="details_container_ma">
                <div className="details_section" >
                    <img src={currentMovie.imageUrl} alt={currentMovie.name} className="details_image" />
                    {
                        email
                            ? [(
                                email === currentMovie.creator
                                    ? (
                                        <div className="creator_buttons">
                                            <Link to={`/edit/${currentMovie.movieId}`} className="personal_btn">Edit</Link>
                                            <Link to='#' onClick={onMovieDelete} className="personal_btn">Delete</Link>
                                        </div>
                                    )
                                    : [(
                                        ifAdded
                                            ? (
                                                <div className="creator_buttons">
                                                    <Link to='#' onClick={onRemoveFromFavourites} className="personal_btn_guest">Remove from favourites</Link>
                                                </div>
                                            )
                                            : (
                                                <div className="creator_buttons">
                                                    <Link to="#" onClick={onAddMovieToFavourites} className="personal_btn_guest">Add to favourites</Link>
                                                </div>
                                            )
                                    )]
                            )]
                            : <div></div>
                    }
                </div>

                <div className="movie_information">
                    <h1>Movie Title: <span>{currentMovie.name}</span> </h1>
                    <h2>Overview:  <span>{currentMovie.overview}</span></h2>
                    <h2>Genre:  <span>{currentMovie.genre}</span></h2>
                    <h2>Rating:  <span>{currentMovie.rating}/10</span></h2>
                    <h2>Runtime:  <span>{currentMovie.runtime}</span></h2>
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
