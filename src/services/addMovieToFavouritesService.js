const baseUrl = `https://movies-fd812-default-rtdb.europe-west1.firebasedatabase.app`;

const addMovieToFavourites = async (id, currentUser) => {

    let res = await fetch(`${baseUrl}/movies/${id}/favouriteTo.json`, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser)
    });

    return res;
}

export default addMovieToFavourites;
