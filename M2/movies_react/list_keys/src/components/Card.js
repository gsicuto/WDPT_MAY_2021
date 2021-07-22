import './Card.css'

const Card = ({title, director, id, hasOscars, deleteMovie}) => {


  return (
    <div className='movie-card'>
      <h2>{title}</h2>
      {hasOscars && <span>🏆</span>}
      {!hasOscars && <p>No Oscars</p>}
      <p>Director: {director}</p>
      <button onClick={ () => { deleteMovie(id) } }>REMOVE</button>
    </div>
  );
};

export default Card
