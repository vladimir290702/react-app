import './Profile.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getUserMovies from "../../services/getUserMovies";
import getFavouriteMovies from "../../services/getFavouriteMovies";
import { useAuth } from '../../contexts/authContext';

export default function Profile() {
    const [createdMovies, setCreatedMovies] = useState([]);
    const [favouriteMovies, setFavouriteMovies] = useState([]);

    const { currentUser } = useAuth();
  
    useEffect(() => {
        getUserMovies(currentUser)
            .then(data => {
                setCreatedMovies(data);
            })

        getFavouriteMovies(currentUser)
            .then(data => {
                setFavouriteMovies(data);
            });
    }, [currentUser])

    return (
        <>
            <div className='profile_wrapper'>
                <h1>Created by you:</h1>
                <div className="created_by_user">
                    {
                        createdMovies.length > 0
                            ? createdMovies.map(movie => (
                                <span key={movie.id} className='all_movies'>
                                    <Link to={`/details/${movie.id}`} className="invisible">
                                        <img src={movie.imageUrl} alt={movie.name} className='all-movies-image' />
                                    </Link>
                                </span>
                            ))
                            : <h1>Sorry you don't have any movies added by you!</h1>
                    }
                </div>

                <h1>Your favourite movies:</h1>
                <div className="favourite_movies">
                    {
                        favouriteMovies.length > 0
                            ? favouriteMovies.map(movie => (
                                <span key={movie.id} className='all_movies'>
                                    <Link to={`/details/${movie.id}`} className="invisible">
                                        <img src={movie.imageUrl} alt={movie.name} className='all-movies-image' />
                                    </Link>
                                </span>
                            ))
                            : <h1>Sorry you don't have any favourite movies yet!</h1>
                    }
                </div>
            </div>

            <div className="emp"></div>
        </>
    )
}