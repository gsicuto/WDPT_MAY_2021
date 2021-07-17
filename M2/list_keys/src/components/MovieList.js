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
    showButtons: true
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
    this.setState({showButtons: !this.state.showButtons})
  }

  render() {
   const filteredMovies = this.state.movies.filter(element => element.hasOscars === this.state.showOscars)

    return (
      <>
        <div className="list-header">
          <h1>Movie List</h1>
          {this.state.showButtons ?( 
            <>
              <button onClick={() => {this.handleToogleOscar()}}>
                {this.state.showOscars ? 'Hide Oscars': 'Show Oscars'}
              </button>
              <AddMovie addMovie={this.handleAddMovie} />
              <button onClick={()=>{this.handleShowButton()}}>Hide Buttons</button>
            </>
            ) :
            <button onClick={()=>{this.handleShowButton()}}>Show Buttons</button>
        }
          
        </div>
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
