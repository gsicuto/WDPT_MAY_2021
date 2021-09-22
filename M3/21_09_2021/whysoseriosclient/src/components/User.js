import React, { Component } from 'react'
import api from '../utils/api.utils'

export default class User extends Component {

  componentDidMount = async () => {
    await api.getUsers();
  }

  render() {
    return (
      <div>
        <h1>Rota de users</h1>
      </div>
    )
  }
}
