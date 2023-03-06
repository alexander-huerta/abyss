import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieList from './MovieList.jsx';
import NavBar from './NavBar.jsx';
import GenreSelect from './GenreSelect.jsx';
import Container from '@material-ui/core/Container';




const App = () => {
  
  const [movies, setMovieList] = useState([]);

  useEffect(() => {
    getMovies()
  });


  const getMovies = () => {
    axios.get('/movies', (req, receivedMovies) => {})
      .then((receivedMovies) => {
        setMovieList(receivedMovies.data.results)
        console.log('app.js')
      })
      .catch((err) => console.log(err))
  }

  const getMoviesByGenre = (genre) => {
    console.log(genre, 'gentre at app')
    axios.get('/movies/genre', {
      params: {
        genre
      }
    })
      .then((receivedMovies) => {
        console.log('received movies', receivedMovies.data.genres)
        setMovieList(receivedMovies.data.genres)
        console.log('genre app.js')
      })
      .catch((err) => console.log(err))
  }

  const getMoviesByTerm = (term) => {
    axios.get('/movies/term', {
      params: {
        term
      }
    })
      .then((receivedMovies) => {
        console.log('received movies', receivedMovies.data)
        setMovieList(receivedMovies.data.genres)
        console.log('genre app.js')
      })
      .catch((err) => console.log(err))
  }

    return (
      <div>
        <Container maxwidth="md">
          <NavBar getMoviesByTerm={getMoviesByTerm}/>
          <GenreSelect getMoviesByGenre={getMoviesByGenre}/>
          <MovieList movies={movies}/>
        </Container>
      </div>
    )
  

}


export default App;