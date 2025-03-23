 const API_KEY='4c0a8f7e2df89fbb02cc9bb28368038f';
 const BASE_URL = 'https://api.themoviedb.org/3';
 
export  const PopularMovies = async  (query) => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
        const data = await response.json()
        return data.results

    } catch (error) {
        console.log("there was an error finding the api")


    }
}
