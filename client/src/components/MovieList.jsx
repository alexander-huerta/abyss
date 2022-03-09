import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';


function MovieList ({movies}) {

  return (
    <div>
      {movies.map((movie) =>
         <MovieListEntry
           movie={movie}
           key={movie.id}/>
      )}
    </div>
  )
}

export default MovieList;