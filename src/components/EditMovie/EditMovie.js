import './EditMovie.css';
import { useAuth } from '../../contexts/authContext';
import editMovie from '../../services/editMovieService';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovieDetails from '../../services/getMovieDetails';

function EditMovie() {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [movieInformation, setmovieInformation] = useState({})
    let email;

    if (currentUser) {
        email = currentUser.email;
    }

    useEffect(() => {
        getMovieDetails(movieId)
            .then(data => {
                setmovieInformation(data);
            })
    }, [])

    const onEditMovie = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let name = formData.get('title');
        let rating = formData.get('rating');
        let genre = formData.get('genre');
        let runtime = formData.get('runtime');
        let overview = formData.get('overview');
        let imageUrl = formData.get('imageUrl');
        let budget = formData.get('budget');

        let movieData = {
            creator: email, name, rating, genre, runtime, overview, imageUrl, budget
        }

        editMovie(movieId, movieData)
        .then(res => {
            navigate(`/details/${movieId}`)
        })
    }

    return (
        <div className='add_movie_wrapper'>
            <h1 className='form_title'>Edit Movie</h1>
            <form action="" id="add_movie_form" className="add_movie_form" onSubmit={onEditMovie}>
                <div className="left_movie_section">
                    <div>
                        <h1 >Movie Title</h1>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title..."
                            name="title"
                            defaultValue={movieInformation.name}
                        />
                    </div>
                    <div>
                        <h1>Movie Rating</h1>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Rating..."
                            name="rating"
                            defaultValue={movieInformation.rating}
                        />
                    </div>
                    <div>
                        <h1>Movie Genre</h1>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Genre..."
                            name="genre"
                            defaultValue={movieInformation.genre}
                        />
                    </div>
                    <div>
                        <h1 >Movie Runtime</h1>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Runtime..."
                            name="runtime"
                            defaultValue={movieInformation.runtime}
                        />
                    </div>
                </div>

                <div className="right_movie_section">
                    <div>
                        <h1>Movie Overview</h1>
                        <input
                            type="text"
                            className="form-control_special"
                            placeholder="Overview..."
                            name="overview"
                            defaultValue={movieInformation.overview}
                        />
                    </div>
                    <div>
                        <h1 >Movie Image</h1>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="ImageUrl..."
                            name="imageUrl"
                            defaultValue={movieInformation.imageUrl}
                        />
                    </div>
                    <div>
                        <h1>Movie Budget</h1>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Budget..."
                            name="budget"
                            defaultValue={movieInformation.budget}
                        />
                    </div>
                </div>

                <button className='btn_submit'>Submit</button>
            </form>
        </div>
    )
}

export default EditMovie;