const API_KEY = `3e1092a7ba3d25e630fd1dcba22c7e47`;

const getNetflixMovieDetails = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();

    return data;
}

export default getNetflixMovieDetails;