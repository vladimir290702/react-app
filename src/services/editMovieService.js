const baseUrl = `https://movies-fd812-default-rtdb.europe-west1.firebasedatabase.app`;

const editMovie = async (movieId, movie) => {
    let res = await fetch(`${baseUrl}/movies/${movieId}.json`, {
        method: "PATCH",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(movie)
    });

    return res;
}

export default editMovie;