import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


class Page2 extends Component {

  state= {
    giphy:''
  }

  componentDidMount() {
   this.newGiphy()
  }

  newGiphy = async () => {
    const result = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=qFFYWBg23r6dEaQNqHCnSGaWKjFmSf3o')
    const newGiphy = result.data.data.embed_url
    this.setState({
      giphy: newGiphy
    })
  }

  render(){
  return (
    <div>
      <h1>Page 2</h1>
      <button onClick={this.newGiphy}>New Giphy</button>
      <iframe src={this.state.giphy} width={480} height={480}></iframe>
      <Link to='pagina1'>Pagina 1</Link>
    </div>
  )}
}

export default Page2
