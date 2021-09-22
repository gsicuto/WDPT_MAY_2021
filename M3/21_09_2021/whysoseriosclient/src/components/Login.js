import { Component } from "react";
import api from '../utils/api.utils'

class Login extends Component {

  state = {
    username: '',
    password: '',
    message:''
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.login(this.state);
      this.props.history.push('/users');
    } catch (error) {
      this.setState({
        message:'Login falhou'
      })
    }
  }


  render = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type= 'text' name='username' value={this.state.username} onChange={this.handleInput}/>
          <label>Password</label>
          <input type= 'password' name='password' value={this.state.password} onChange={this.handleInput}/>
          <button type='submit'>Login</button>
        </form>
        {this.state.message && 
        <div>{this.state.message}</div>}
      </div>
    );
  };
}
export default Login;