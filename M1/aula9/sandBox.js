// Scope

let variavelGlobal = 1 // Escopo Global

const message = 'oi do escopo global';

function sayHello() {
  console.log('dentro da funcao', message);
  const greetings = 'oi do escopo da funcao/ escopo local';
  return greetings;
}

// console.log(message);
// sayHello();
// console.log(greetings);

// for (var i = 0; i <= 30; i += 1) {
//   console.log(i);
// }

// console.log('i fora do for', i);


// o var vaza do escopo do if o let cria uma nova variavel no escopo do if

let name = 'Gabriel';

if (true) {
  let name = 'Carlos';
  console.log(name, '<--- dentro do if');
}

console.log(name, '<--- fora do if');


// var pode ser redeclarado e reatribuido

var idade = 20 // declaração
var idade = 30 // redeclaração
idade = 50 // reatribuição

console.log(idade);

// o let nao permite redeclaração no mesmo escopo

let animal = 'gato'; // Declaração
// let animal = 'cachorro' // da erro de variavel ja declarada (syntax) // não permite redeclaração
animal = 'cachorro'; // Reatribuição
console.log(animal);

// const

const curso = 'WebDev' // Declaração
// const curso = 'UX' // não posso redeclarar erro (syntax)
// curso = 'UX' // não permite reatribuição 


// Hoisting
oi(); // funções declarativas podem ser chamadas antes da declaracão da mesma

function oi () {
  console.log('oi');
}


console.log(variavel)

var variavel = 0 // variaveis declaradas com var sofrem de hoisting somente a declaração não a atribuição de valor;

// Shadowing

let a = 2
let b = 4

console.log('antes da função' ,a , b)

function interna() {
  let a = 3; // Shadowing, criando uma nova variavel com o mesmo nome de outra em outro escopo
  b = 5; // reatribuindo valor para variavel do escopo global
  console.log('dentro da função' ,a , b)
}

interna();

console.log('fora da função' ,a , b)

// Dentro voce pode acessar fora mas fora voce nao pode acessar dentro by Evanio
var c = 4;
let d = 5

function a1() {

  let c = 2;
  // console.log(interno);
  function b2() {
    console.log(c);

    function b3 () {
      let c = 5;
      let interno = 80;
      console.log(d);
    }

    b3();
    console.log(c);
  }
  b2();
  console.log(c);
}

console.log(c);

a1();