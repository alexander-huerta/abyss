
const axios = require('axios');
const config = require('../../config.js');


let getMovies = () => {
  return axios.get(`https://api.themoviedb.org/3/discover/movie/?api_key=${config.TOKEN}`)
}


module.exports.getMovies = getMovies;