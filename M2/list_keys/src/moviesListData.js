const movies = [
  "Harry Potter",
  "Harry Potter",
  "Matrix",
  "Resgate do Soldado Ryan",
  "Querida encolhi as crianças",
  "Star Wars",
];

// const listMovies = [<li>Harry Potter</li>, <li>Matrix</li>,<li>Resgate do Soldado Ryan</li>];

// const listMovies = movies.map((movie, index) => <li key = {index} >{movie}</li>)

const movies2 = [
  {
    id: "fUbJPciPq",
    title: "The Godfather",
    director: "Francis Coppola",
    hasOscars: true, 
    IMDbRating: 9.2,
  },
  {
    id: "EXN9npPlo",
    title: "Star Wars",
    director: "Rian Johnson",
    hasOscars: true,
    IMDbRating: 8.7,
  },
  {
    id: "lecqGHnAb",
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    hasOscars: false,
    IMDbRating: 9.3,
  },
];

const listMovies = movies2.map((element) => (
  <li key={element.id}> {element.title} </li>
));

export { movies2, listMovies };
