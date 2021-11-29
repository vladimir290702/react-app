const baseUrl = `https://movies-fd812-default-rtdb.europe-west1.firebasedatabase.app`;

const getAllMovies = async () => {
    let response = await fetch(`${baseUrl}/movies.json`);
    let data = await response.json();

    if (data === null) {
        return [];
    }

    let allMovies = Object.keys(data).map(id => Object.assign(data[id], { id }))

    return allMovies
}

export default getAllMovies;