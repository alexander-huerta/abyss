import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';



function MovieList ({movies}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
      <ImageList >
        {movies.map((movie) => (
          <ImageListItem key={movie.id}>
            <h3> {movie.title}</h3>
            <StarOutlineOutlinedIcon/>x
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              loading="lazy"
              onClick={()=>console.log('open modal')}
            />

          </ImageListItem>

        ))}
    </ImageList>
  )
}

export default MovieList;




