import React from 'react';
import './App.css';
import dog from './dog.jpg'
import Comp from './Comp.js'

function capitalizeFirstLetter(name) {
  return `${name[0].toUpperCase() + name.slice(1)}`;
}

const statement = <h1>React is Fun</h1>
const student = {
  name: 'daniel',
  funFact: 'Fazia parte de um grupo de dança folclórica Russa (companhia Balalayka)'
}
// Atributos das tags html:
// class => className
// onclick => onClick
// onchange => onChange
// for => htmlFor

const validador = true

const array = ['Thais', 'Debora', 'Evanio', 'Gustavo']

function compReturn () {
  if (validador) {
    return <Comp/>
  }
}

function App() {
  return (
    <React.Fragment>
      <img src={dog} id='image'></img>
      {statement}
      {/* Comentário */}
      {compReturn()};
      {validador && <Comp/>}
      {array.map(nome => <div key={nome}><Comp/><p>{nome}</p></div>)}
      <div>
        <h2>O Nome é: {capitalizeFirstLetter(student.name)}</h2>
        <h3>O fato é: {student.funFact}</h3>
      </div>


    </React.Fragment>
  );
}

export default App;
