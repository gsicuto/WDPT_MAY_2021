import logo from './logo.svg';
import './App.css';
import Name2 from './Name2';
import Header from './Header/Header.js';
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
     <Header companyName = 'About' color='blue'></Header>

     <Name2 firstName = 'José' lastName = 'Antonio'/>
     <Name2 firstName = 'Marcio' lastName = 'Antonio'/>
     <Name2 firstName = 'Carlos' lastName = 'Antonio'/>

    <ReactPlayer 
      url= 'https://www.youtube.com/watch?v=jJGpeXr1MgU'
      controls
      playing
      volume= '0.2'
    />
    </div>
  );
}

export default App;
