
const axios = require('axios');
const config = require('../../config.js');


let getMovies = () => {
  return axios.get(`https://api.themoviedb.org/3/discover/movie/?api_key=${config.TOKEN}`)
}

let getMoviesByGenre = (genre) => {
  console.log('genre at helpers', genre)
  return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${config.TOKEN}`)
}

let getMoviesByTerm = (term) => {
  return axios.get(`https://api.themoviedb.org/3/keyword/batman/80/?api_key=${config.TOKEN}`)
}



module.exports = {
  getMovies,
  getMoviesByGenre,
  getMoviesByTerm
}