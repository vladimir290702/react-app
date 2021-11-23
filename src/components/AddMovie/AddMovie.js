import './AddMovie.css'

function AddMovie() {


    return (
        <div className='add_movie_wrapper'>
            <h1 className='form_title'>Add Movie</h1>

            <form action="" className="add_movie_form">
                
                <div className="left_movie_section">
                    <div>
                        <h1 >Movie Title</h1>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title..."
                            name="title"
                        />
                    </div>
                    <div>
                        <h1>Movie Rating</h1>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Rating..."
                            name="rating"
                        />
                    </div>
                    <div>
                        <h1>Movie Genre</h1>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Genre..."
                            name="genre"
                        />
                    </div>
                    <div>
                        <h1 >Movie Runtime</h1>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Runtime..."
                            name="title"
                        />
                    </div>
                </div>

                <div classNameName="right_movie_section">
                    <div>
                        <h1>Movie Overview</h1>
                        <input
                            type="text"
                            className="form-control_special"
                            placeholder="Overview..."
                            name="title"
                        />
                    </div>
                    <div>
                        <h1 >Movie Image</h1>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="ImageUrl..."
                            name="title"
                        />
                    </div>
                    <div>
                        <h1>Movie Budget</h1>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Budget..."
                            name="title"
                        />
                    </div>
                </div>

                <button className='btn_submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddMovie;