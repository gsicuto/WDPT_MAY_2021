// // function statement

// // function nomeDaFuncao (parametros) {
// //   // o que quero que seja feito
// //   return // oq eu quero que ela me retorne//
// // }

// // function meuConsoleLog(string) {
// //   console.log(string);
// // }

// // let resultado1 = console.log('oi');
// // let resultado2 = meuConsoleLog('tchau');

// // console.log(resultado1, resultado2);

// //  let minhaIdade = 45;


// // function fazAniversário(idade) {

// //   idade += 1;
// //   minhaIdade = idade;

// //   return idade;
// // }


// // console.log(fazAniversário(minhaIdade));

// // console.log(minhaIdade)

// // function sayHello(name1, name2, name3) {
// //   console.log('antes do return');
// //   return `Hello, ${name1}, ${name2}, ${name3}`;
// //   console.log('depois do return');
// // }

// // sayHello('Pedro', 'Paulo', 'Carla');

// // function countName (name, age = undefined) {
// //   if (name.length === 0) {
// //     return 'coloque um nome valido';
// //   }
// //   if (age === undefined) {
// //     return `o tamanho do nome é ${name.length}`;
// //   }
// //   return `o tamanho do nome é ${name.length} e a idade é ${age}`;
// // }

// // countName('Carlos');

// // outra formas de declarar função

// // function sum1 () {
// //   console.log(1 + 2);
// // }

// // let sum2 = function () {
// //   console.log(1 + 2);
// // }

// // let sum3 = () => {
// //   console.log(1 + 2);
// // }

// // sum1()
// // sum2()
// // sum3()

// //Array / lista 

// // let array = [1, true, function sum () { 1 + 2 }, [1, 2, 3], 'string'];

// let array = ['Pedro', 'Carla', 'Alberto', 'Felipe'];

// // adiciona elemento no final do array

// array.push('Marcio');


// // adiciona element no inicio do array

// array.unshift('Debora');


// // remover elementos do array

// let result = array.splice(2, 1);
// // console.log(result);
// // console.log(array);

// //.pop() ---> remove o ultimo elemento  
// // .shift() ---> remove a primeira posição

// // mostrar no console o nome de todos os alunos

// for (let i = 0; i < array.length; i += 1){
//   console.log(array[i]);
// }

// //forEach high order function

// array.forEach(function (name){ console.log(name)});

// array.forEach( name => console.log(name) );

// let phrase = 'ola eu sou o gabriel uhul'

// let words = phrase.split(' ');

// console.log(words);

// let newString = words.join(' ,');
// console.log(newString);


const words = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

console.log(words.indexOf('poison', 2));