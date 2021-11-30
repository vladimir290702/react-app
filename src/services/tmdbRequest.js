const API_KEY = `3e1092a7ba3d25e630fd1dcba22c7e47`;
const baseURL = `https://api.themoviedb.org/3`;

const requests = {
    fetchTrending: `${baseURL}/trending/all/day?api_key=${API_KEY}`,
    fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}`,
    fetchLatest: `${baseURL}/movie/now_playing?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `${baseURL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming: `${baseURL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
}

export default requests;