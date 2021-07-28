import { Component } from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import MovieList from './components/MovieList.js';
import NavBar from './components/NavBar';
import MovieDetail from './components/MovieDetail';
import {Switch, Route, Redirect} from 'react-router-dom'
import { movies2 as movies } from './moviesListData'

class App extends Component {



  constructor(props){
    super(props);
    console.log('Estou no Construtor do APP')
    this.state = {
      loggedUser: true
    }
  }

  componentDidMount () {
    console.log('Estou no Did Mount do App')
  }

 render() {
   console.log('Estou no Render do App')
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route  exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route exact path='/movielist'>
          {this.state.loggedUser ?
          <MovieList/> :
          <Redirect to='/'/>}
        </Route>
        <Route path='/movielist/:id' render={(props) => <MovieDetail {...props}  movies={movies}/>}/>
      </Switch>
    </div>
  );
 }
  
}

export default App;
