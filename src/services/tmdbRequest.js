const API_KEY = `3e1092a7ba3d25e630fd1dcba22c7e47`;
const baseURL = `https://api.themoviedb.org/3`;

const requests = {
    fetchTrending: `${baseURL}/trending/all/day?api_key=3e1092a7ba3d25e630fd1dcba22c7e47`,
    fetchNetflixOriginals: `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${baseURL}/discover/movie?api_key=3e1092a7ba3d25e630fd1dcba22c7e47&with_genres=10749`,
    fetchDocumentaries: `${baseURL}/discover/movie?api_key=3e1092a7ba3d25e630fd1dcba22c7e47&with_genres=99`,
}

//https://api.themoviedb.org/3/trending/all/week?api_key=3e1092a7ba3d25e630fd1dcba22c7e47&language=en-US
//https://api.themoviedb.org/3/discover/movie?api_key=3e1092a7ba3d25e630fd1dcba22c7e47&with_genres=99

export default requests;