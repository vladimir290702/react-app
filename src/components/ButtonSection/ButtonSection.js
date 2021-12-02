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
                <div>
                    <Link to="/add-movie" onClick={notify} className="wrap_btn">Add Movie</Link>

                </div>

                <div>
                    <Link to="/all" className="wrap_btn">Show All Movies</Link>

                </div>
            </div>
        </div>
    )
}

export default ButtonSection;
