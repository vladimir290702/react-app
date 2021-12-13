import { Link, useNavigate } from 'react-router-dom';
import './AllMovieAddictMovies.css'
import { useState, useEffect } from 'react';
import getAllMovies from '../../services/getAllMoviesService';

export default function AllMovieAddictMovies() {
    const [allMovies, setAllMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllMovies()
            .then(data => {
                setAllMovies(data);
            })
    }, []);

    const onSearch = (e) => {
        e.preventDefault();

        let searchText = e.currentTarget.previousElementSibling.value;

        getAllMovies(searchText)
            .then(data => {
                setAllMovies(data);
                navigate('/all-movie-addict-movies');
            })
    }

    return (
        <div id="all_movies">
            <h1 id="title">All Movies</h1>

            <div className="search_div">
                <input id="search" name="search" placeholder="Search..." />
                <button className="searchButton" onClick={onSearch}>
                    <i className="fa fa-search"></i>
                </button>
            </div>

            <div className="movie-addict-movies">
                {
                    allMovies.length > 0
                        ? allMovies.map(x => (
                            <span key={x.id} key={x.id} className='all-added-movies'>
                                <Link to={`/details/${x.id}`}>
                                    <img src={x.imageUrl} alt={x.name} className='all-movies-image' />
                                </Link>
                            </span>
                        ))
                        : <div className='no-movie'><h1>Sorry, no movie found!</h1></div>
                }
            </div>
            <div className="delimeter"></div>
        </div>
    )
}