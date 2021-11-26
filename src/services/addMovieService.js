const baseUrl = `https://movies-fd812-default-rtdb.europe-west1.firebasedatabase.app`;

const addMovie = async (movieData) => {
    let response = await fetch(`${baseUrl}/movies.json`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(movieData)
    })

    let data = await response.json();

    return data;
}

export default addMovie;