import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function MovieList ({movies}) {
  // return (
  //   <div>
  //     <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  //     {movies.map((movie) =>
  //     <ImageListItem
  //     key={src}
  //     style={{ margin: '2px', width: 'calc(100% / 5 - 4.2px)'>
  //        <MovieListEntry
  //          movie={movie}
  //          key={movie.id}/>
  //          </ImageListItem>
  //     )}
  //      </ImageList>
  //   </div>
  // )


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

