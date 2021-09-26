import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import User from './components/User'
import Joke from './components/Joke'
import FormProfilePic from './components/FormProfilePic'


function App() {
  return (
    <div className="App">
      <Route exact path = '/login' render= {(props)=> <Login {...props}/>} />
      <Route path = '/users' component = {User}/>
      <Route path ='/joke/:id' component = {Joke}/>
      <Route path ='/uploadpic' component = {FormProfilePic}/>
      
    </div>
  );
}

export default App;
