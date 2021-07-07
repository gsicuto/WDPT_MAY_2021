let person = {
  name: 'Gabriel',
  age: 30,
  favoriteMusic: 'Anita',
  adress: {
    street: 'Marconia',
    number: 500,
  },
};
// ES5

// let name = person.name;
// let age = person.age;
// let favoriteMusic = person.favoriteMusic;

// ES6
const { age, favoriteMusic, name: fullName, country = 'Brazil', adress: { number, street: rua } } = person;

// let age = person.age;
// let favoriteMusic = person.favoriteMusic
// let fullName = person.name
// let number = person.adress.number;
// let rua = person.adress.street;


const countries = ['Brazil', 'USA', 'Portugal'];

let [firstCountry, secondCountry, thirdCountry, fourth = 'France'] = countries;

let [,,terceiro] = countries; // countries[2]

// console.log(terceiro);
let [,segundo] = countries; 

// console.log(segundo);
let [,,,quarto = 'France'] = countries;

// console.log(quarto);


// ... <--- spread operator

const portugal = ['Pedro', 'Francisco'];
const rio = ['Flavio', 'Evanio', 'Jordana'];
// ES5
// const alunosPtRio = portugal.concat(rio);

// ES6
const alunosPtRio = [...rio, ...portugal];

// console.log(alunosPtRio);

// ES5
// let array1 = portugal.slice();

// ES6
let array1 = [...portugal];

array1[0] = 'Gabriel';

console.log(portugal);
console.log(array1);


function add(...numbers) {
  console.log(numbers);
  // let sum = 0;
  // for(let i = 0; i < arguments.length; i += 1){
  //   sum += arguments[i]
  // }
  let sum = numbers.reduce((acc, number) => acc + number);
  return sum;
}



console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));
