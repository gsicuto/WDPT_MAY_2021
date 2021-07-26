import { Component } from 'react';
import './Card.css'

class Card extends Component {

  constructor(props){
    super(props);
    console.log('estou no construtor do Card')
  }

  componentDidMount(){
    console.log('estou no did mount do Card')
  }

  componentWillUnmount() {
    console.log('Vou desmontar o componente Card')
  }

  render() {
    console.log('Estou no render do Card')
    const {title, director, id, hasOscars, deleteMovie} = this.props

    return (
      <div className='movie-card'>
        <h2>{title}</h2>
        {hasOscars && <span>🏆</span>}
        {!hasOscars && <p>No Oscars</p>}
        <p>Director: {director}</p>
        <button onClick={ () => { deleteMovie(id) } }>REMOVE</button>
      </div>
    );
  }

} 

export default Card
