import { Link } from 'react-router-dom';
import './ResentMovies.css'

export default function ResentMovieCard({ resentMovies }) {
    return (
        <div>
            <img src={resentMovies.imageUrl} alt={resentMovies.name} />
            <div className="resent_details">
                <Link to={`/details/${resentMovies.id}`} className="resent_details_btn">Details</Link>
            </div>
        </div>
    )
}
