import React, { useState } from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';


const MovieList = ({ movies }) => {

    return (

      <ImageList cols={3} gap={30}>

        {movies.map((movie) => (

          <ImageListItem sx={{ width: 300, height: 300 }} key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={movie.title}
              subtitle={movie.id}
              actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${movie.title}`}
              onClick={() => console.log('open modal')}
            >
            <InfoIcon />
            </IconButton>
            }
          />
          </ImageListItem>
        ))}

      </ImageList>

  )
}

export default MovieList;




