import React, { Component } from 'react'
import api from '../utils/api.utils'

export default class Joke extends Component {
  state={
    message:''
  }

  componentDidMount = async () => {
    try {
      await api.getOneJoke(this.props.match.params.id)
    } catch (error) {
      console.log(error)
      this.setState({
        message:'joke not found'
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.message && 
        <h1>{this.state.message}</h1>}
        <h1>Joke</h1>
      </div>
    )
  }
}
