import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function MovieList ({movies}) {
    return (
    <ImageList >
      {movies.map((movie) => (
        <ImageListItem key={movie.id}>
          <h3> {movie.title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
  </ImageList>
  )
}

export default MovieList;

