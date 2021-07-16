import './App.css';
import Counter from './components/Counter.js'
import Emojis from './components/Emojis.js';

function App() {
  return (
    <>
      <Counter inicialValue = {0}/>
      <Emojis/>
    </>
  );
}

export default App;
