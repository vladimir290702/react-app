import './ButtonSection.css';

function ButtonSection() {
    return (
        <div className="section_container">
            <div id="wrap">
                <a href="/add-movie" className="add_movie">Add Movie</a>
                <form className='search_form' autocomplete="on">
                    <input id="search" name="search" type="text" placeholder="Search..." />
                    <input id="search_submit" value="Rechercher" type="submit" />
                </form>
            </div>
        </div>

    )
}

export default ButtonSection;
