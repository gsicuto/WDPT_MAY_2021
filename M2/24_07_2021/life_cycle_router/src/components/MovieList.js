import { Component } from "react";
import { movies2 } from "../moviesListData.js";
import AddMovie from "./AddMovie.js";
import Card from "./Card.js";
import "./MovieList.css";
import axios from 'axios'

// const MovieList = () => {
//   return (
//     movies2.map(movie => <Card key= {movie.id} title={movie.title} director={movie.director}/>)
//   )
// }

class MovieList extends Component {

  constructor(props){
    super(props);
    console.log('estou no construtor do MovieList')
    this.state = {
      movies: movies2,
      showOscars: true,
      showAddMovie: false,
      photos:[]
    };
  }

  componentDidMount(){
    console.log('estou no Did mount do MovieList')
    // axios.get('https://jsonplaceholder.typicode.com/photos').then((result)=>{
    //   console.log(result)
    //   this.setState({
    //     photos: result.data
    //   })
    // })
  }

  componentDidUpdate () {
    console.log('Estou no did update do movie List')
  }
  

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
    console.log('estou no Render do Movie List')
   const filteredMovies = this.state.movies.filter(element => element.hasOscars === this.state.showOscars)

    return (
      <>
        <div className="list-header">
          <h1>Movie List</h1> 
          
        </div>
      <div className="list-header">
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

          {/* {this.state.photos.map(photo => <img src={photo.url}/>)} */}
        </div>
      </>
    );
  }
}

export default MovieList;
