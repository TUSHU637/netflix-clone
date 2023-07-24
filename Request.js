const API_KEY= "14e741886a403f8de4be3594c9f570e7";

const userRequest={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&Ianguages-en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}
export default userRequest