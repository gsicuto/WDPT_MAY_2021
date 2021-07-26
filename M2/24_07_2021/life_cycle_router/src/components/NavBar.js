import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

 class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li> <NavLink exact to='/' className='link' activeStyle={ {color: "green", backgroundColor:'red'} }>Home</NavLink> </li>
          <li> <NavLink to='/movielist' className='link' activeClassName='selected'>MovieList</NavLink> </li>
          <li> <NavLink to='/about' className='link' activeClassName='selected'>About</NavLink> </li>
       
        </ul>
      </div>
    )
  }
}

export default NavBar
