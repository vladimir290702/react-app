import './ButtonSection.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function ButtonSection() {
    const notify = () => {
        toast.warn(`Please make sure that you provided the whole 
        data about every movie you want to add. Thank you in advance!`, {
            className: 'notification',
            autoClose: 10000,
        });
    }
    return (
        <div className="section_container">
            <div id="wrap">
                <Link to="/add-movie" onClick={notify} className="add_movie">Add Movie</Link>
                <Link to="/all" className="search_movie">Show All Movies</Link>

                <form className='search_form'>
                    <input id="search" name="search" type="text" placeholder="Search..." />
                </form>
            </div>
        </div>
    )
}

export default ButtonSection;
