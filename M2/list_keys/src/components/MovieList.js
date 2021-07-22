import { Component } from "react";
import { movies2 } from "../moviesListData.js";
import AddMovie from "./AddMovie.js";
import Card from "./Card.js";
import "./MovieList.css";

// const MovieList = () => {
//   return (
//     movies2.map(movie => <Card key= {movie.id} title={movie.title} director={movie.director}/>)
//   )
// }

class MovieList extends Component {
  state = {
    movies: movies2,
    showOscars: true,
    showAddMovie: true
  };

  handleDeleteMovie = (id) => {
    const newMovies = [...this.state.movies]; // copia do meu array no state
    const index = newMovies.findIndex((movie) => movie.id === id);
    newMovies.splice(index, 1);
    this.setState({
      movies: newMovies,
    });
  };

  handleAddMovie = (movie) => {
    const newMovies = [...this.state.movies, movie];
    this.setState({
      movies: newMovies,
    });
  };

  handleToogleOscar = () => {
    this.setState({showOscars: !this.state.showOscars})
  }

  handleShowButton = () => {
    this.setState({showAddMovie: !this.state.showAddMovie})
  }

  render() {
   const filteredMovies = this.state.movies.filter(element => element.hasOscars === this.state.showOscars)

    return (
      <>
        <div className="list-header">
          <h1>Movie List</h1> 
              <button onClick={() => {this.handleToogleOscar()}}>
                {this.state.showOscars ? 'Hide Oscars': 'Show Oscars'}
              </button>
          
            <button onClick={()=>{this.handleShowButton()}}>AddMovie</button>
          
        </div>
        {this.state.showAddMovie && <AddMovie addMovie={this.handleAddMovie} />}
        <div className='movies-list'>
          {filteredMovies.map((item) => (
            <Card
              key={item.id}
              {...item}
              deleteMovie={this.handleDeleteMovie}
            />
          ))}
        </div>
      </>
    );
  }
}

export default MovieList;
