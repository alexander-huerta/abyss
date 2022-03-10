import React from 'react';
import axios from 'axios';
import MovieList from './MovieList.jsx';
import NavBar from './NavBar.jsx';
import GenreSelect from './GenreSelect.jsx';

import Container from '@material-ui/core/Container';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies() {
    axios.get('/movies', (req, receivedMovies) => {})
      .then((receivedMovies) => {
        this.setState({movies: receivedMovies.data.results})
      })
      .catch((err) => console.log(err))
  }

  render () {
    return (
      <div>
        <Container maxwidth="md">
          <NavBar/>
          <GenreSelect/>
          <MovieList movies={this.state.movies}/>
        </Container>
      </div>
    )
  }
}


export default App;