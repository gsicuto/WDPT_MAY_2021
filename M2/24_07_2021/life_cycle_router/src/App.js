import { Component } from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import MovieList from './components/MovieList.js';
import NavBar from './components/NavBar';
import {Switch, Route, Redirect} from 'react-router-dom'

class App extends Component {



  constructor(props){
    super(props);
    console.log('Estou no Construtor do APP')
    this.state = {
      loggedUser: false
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
        <Route path='/movielist'>
          {this.state.loggedUser ?
          <MovieList/> :
          <Redirect to='/'/>}
        </Route>
      </Switch>
    </div>
  );
 }
  
}

export default App;
