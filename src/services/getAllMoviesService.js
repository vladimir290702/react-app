const baseUrl = `https://movies-fd812-default-rtdb.europe-west1.firebasedatabase.app`;

const getAllMovies = async (query) => {
    let response = await fetch(`${baseUrl}/movies.json`);
    let data = await response.json();

    if (data === null) {
        return [];
    }

    let allMovies = Object.keys(data)
        .map(id => Object.assign(data[id], { id }))
        .filter(x => {
            if (!query) {
                return x;
            }
            else if (x.name.includes(query)) {
                return x;
            }
        });

    return allMovies;
}

export default getAllMovies;