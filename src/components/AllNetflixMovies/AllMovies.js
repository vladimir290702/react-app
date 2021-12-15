import MovieCard from './MovieCard';
import requests from '../../services/tmdbRequest';
import { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

export default function AllMovies() {
    const [done, setDone] = useState(false);
    const [div, setDiv] = useState('load');

    useEffect(() => {
        setTimeout(() => {
            setDone(true);
            setDiv('');
        }, 3000);
    }, [])

    return (
        <div className={div}>
            {
                done
                    ? (
                        <div className="all_movies">
                            <MovieCard title='Trending Now' endpoint={requests.fetchTrending} />
                            <MovieCard title='Upcoming' endpoint={requests.fetchUpcoming} />
                            <MovieCard title='Latest' endpoint={requests.fetchLatest} />
                            <MovieCard title='Top Rated' endpoint={requests.fetchTopRated} />
                            <MovieCard title='Popular' endpoint={requests.fetchPopular} />
                            <div className="delimeter"></div>
                        </div>
                    )
                    : (
                        <div className='loading-div'>
                            <ReactLoading className='loading' type={"spinningBubbles"} color={"red"} heigth={1167} width={200} />
                            <h1>Loading...</h1>
                        </div>
                    )
            }
        </div>
    )
}