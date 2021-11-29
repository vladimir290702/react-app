const baseUrl = `https://movies-fd812-default-rtdb.europe-west1.firebasedatabase.app`;

const getMovieDetails = async (movieId) => {
    const response = await fetch(`${baseUrl}/movies/${movieId}.json`);
    const data = await response.json();

    return Object.assign({ movieId }, data);
}

export default getMovieDetails;