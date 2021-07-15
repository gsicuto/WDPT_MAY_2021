import {Component} from 'react';
import Name2 from '../Name2';
import './Header.css'; 

class Header extends Component {

  render() {
    console.log(this.props)
    return (
      <div className={this.props.color}>
        <h1>{this.props.companyName}</h1>
        <Name2 firstName= 'Marcio'/>


      </div>
    )
  }
}

export default Header;