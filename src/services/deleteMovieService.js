const baseUrl = `https://movies-fd812-default-rtdb.europe-west1.firebasedatabase.app`;

const deleteMovie = async (movieId) => {
    let res = await fetch(`${baseUrl}/movies/${movieId}.json`, { method: 'DELETE' });
    
    return res;
}

export default deleteMovie;