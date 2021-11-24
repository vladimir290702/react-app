import './CategorySection.css';

export default function CategorySection() {
    return (
        <div className="category_container">
            <section className="category_text">
                <h2 className="category_notification">You have the ability to chose between Netflix movies or movies added by our users!</h2>

                <p>In this application you can find the information you need about your favourite movie or 
                    the movie you want to watch next. We supply you with a lot of information from two main 
                    places. The first one is the movie giant - Netflix, where you cant watch movies and tv 
                    series with top quality and we have presented you the information in an easy way. The second 
                    way to access any movie information is via the second button down below, where you can look 
                    at movies that are created by our users. Enjoy the information we have grant you!</p>

                <h2>Here you can:</h2>

                <ol>
                    <li>Find information about every movie you like!</li>
                    <li>Learn something new about your favourite movie!</li>
                    <li>If you cant't find your favourite movie, you can add it by yourself!</li>
                </ol>

                <div id="buttons">
                    <a href="/all-neflix-movies" className="section_btn">NETFLIX MOVIES</a>
                    <a href="/all-movie-addict-movies" className="section_btn">MOVIE ADDICT MOVIES</a>
                </div>

            </section>
        </div>

    )
}
