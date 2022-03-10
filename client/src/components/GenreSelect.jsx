
import React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


function GenreSelect () {

  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Genre
        </InputLabel>
        <NativeSelect
          defaultValue={'all'}
          onChange={handleChange}
          inputProps={{
            name: 'genre',
            id: 'uncontrolled-native',
          }}
        >
          <option value={'all'}>All</option>
          <option value={'action'}>Action</option>
          <option value={'comedy'}>Comedy</option>
          <option value={'documentary'}>Documentary</option>
          <option value={'drama'}>Drama</option>
          <option value={'horror'}>Horor</option>
          <option value={'romance'}>Romance</option>
          <option value={'thriller'}>Thriller</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default GenreSelect;





