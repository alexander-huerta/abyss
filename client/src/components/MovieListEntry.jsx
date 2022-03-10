import React from 'react';


function MovieListEntry ({movie}) {


    return (
      <div>
        <h3> {movie.title}</h3>
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}></img>



      </div>
    )



}

export default MovieListEntry;