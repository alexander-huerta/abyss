import React from 'react';
import axios from 'axios';
import MovieList from './MovieList.jsx';


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
        console.log(this.state.movies)
      })
      .catch((err) => console.log(err))
  }

  render () {
    return (
      <div>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}


export default App;