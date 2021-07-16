import { Component } from "react";

class Emojis extends Component {

  state = {
    mood: '😭'
  }

  handleChangeMood = () => {
    // let atualMood = this.state.mood
    // let newMood = 

    this.setState({
      mood: this.state.mood === '😄' ? '😭' : '😄'
    })
    
    // if (this.state.mood === '😄') {
    //   this.setState({
    //     mood: '😭'
    //   })
    // } else {
    //   this.setState({
    //     mood: '😄'
    //   })
    // }

  }

  render() {
    return <p onClick={this.handleChangeMood}>{this.state.mood}</p>
  }

}

export default Emojis