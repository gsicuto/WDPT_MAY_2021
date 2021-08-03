import './App.css';
import {Switch, Route} from  'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';


function App() {
  return (
    <div className="App">
     <Switch>
       <Route path='/pagina1' render={(props) => {
         return <Page1 {...props}/>
       }}/>
       <Route path='/pagina2' component={Page2}/>
     </Switch>
    </div>
  );
}

export default App;
