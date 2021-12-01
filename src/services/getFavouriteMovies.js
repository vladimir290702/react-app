const baseUrl = `https://movies-fd812-default-rtdb.europe-west1.firebasedatabase.app`;

const getFavouriteMovies = async (email) => {
    let response = await fetch(`${baseUrl}/movies.json`);
    let data = await response.json();

    let allMovies = Object.keys(data).map(id => Object.assign(data[id], { id }));

    let favouriteMovies = [];

    for (const el of allMovies) {
        if (el.favouriteTo) {
            for (const key in el.favouriteTo) {
                if (el.favouriteTo[key] === email) {
                    favouriteMovies.push(el);
                }
            }
        }
    }

    return favouriteMovies;
}

export default getFavouriteMovies;