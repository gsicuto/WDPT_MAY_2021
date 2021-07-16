import { Component } from "react";
import SecondCounter from "./SecondCounter.js";

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: props.inicialValue
    }
  }
  
  // state = {
  //   count: this.props.inicialValue
  // }

   handleIncrementClick =  () => {
    //this.state.count += 1 // nao altera o state diretamente
    this.setState(
      {
        count: this.state.count + 1
      }
    )
  }

  render() {
    return(
      <div>
        <h1>O Valor do contador é: {this.state.count}</h1> 
        <SecondCounter num = {this.state.count}/>
        <button onClick = {this.handleIncrementClick}> Soma 1 no contador</button>
      </div>
    )
  }
}

export default Counter