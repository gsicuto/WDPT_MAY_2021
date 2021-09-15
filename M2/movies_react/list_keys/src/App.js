import { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList.js';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    axios.get('http://localhost:5000/jokes').then(result => console.log(result))
  }
  render(){
  return (
    <div className="App">
      <MovieList/>
    </div>
  );}
}

export default App;
