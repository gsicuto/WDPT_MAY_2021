import React, { Component } from 'react'
import queryString from 'query-string'

class MovieDetail extends Component {

  state= {
    movie: {}
  }

  componentDidMount() {
    const query = queryString.parse(this.props.location.search)
    console.log(query)
    const movie = this.props.movies.find((movie) => {return this.props.match.params.id === movie.id})
    console.log(movie)
    this.setState({
      movie
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.movie.title}</h1>
        <h2>Director: {this.state.movie.director}</h2>
        <h2>IMDB Rating: {this.state.movie.IMDbRating}</h2>
        <h2>Has Oscars: {this.state.movie.hasOscars ? 'Yes': 'No'}</h2>
      </div>
    )
  }
}

export default MovieDetail

