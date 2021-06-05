// Scope

const variavelGlobal = 1; // Escopo Global

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

const name = 'Gabriel';

if (true) {
  const name = 'Carlos';
  console.log(name, '<--- dentro do if');
}

console.log(name, '<--- fora do if');


// var pode ser redeclarado e reatribuido

var idade = 20; // declaração
var idade = 30; // redeclaração
idade = 50; // reatribuição

console.log(idade);

// o let nao permite redeclaração no mesmo escopo

let animal = 'gato'; // Declaração
// let animal = 'cachorro' // da erro de variavel ja declarada (syntax) // não permite redeclaração
animal = 'cachorro'; // Reatribuição
console.log(animal);

// const

const curso = 'WebDev'; // Declaração
// const curso = 'UX' // não posso redeclarar erro (syntax)
// curso = 'UX' // não permite reatribuição


// Hoisting
oi(); // funções declarativas podem ser chamadas antes da declaracão da mesma

function oi() {
  console.log('oi');
}


console.log(variavel);

var variavel = 0; // variaveis declaradas com var sofrem de hoisting somente a declaração não a atribuição de valor;

// Shadowing

const a = 2;
let b = 4;

console.log('antes da função', a, b);

function interna() {
  const a = 3; // Shadowing, criando uma nova variavel com o mesmo nome de outra em outro escopo
  b = 5; // reatribuindo valor para variavel do escopo global
  console.log('dentro da função', a, b);
}

interna();

console.log('fora da função', a, b);

// Dentro voce pode acessar fora mas fora voce nao pode acessar dentro by Evanio
const c = 4;
const d = 5;

function a1() {
  const c = 2;
  // console.log(interno);
  function b2() {
    console.log(c);

    function b3() {
      const c = 5;
      const interno = 80;
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


// try catch finally and throw

function getUserName(user) {
  if (!user.name || !user.age) {
    throw new SyntaxError('incomplete data: function expect name and age for execution'); // para a execução da função igual o return
  }
  if (typeof user.age !== 'number') {
    throw new TypeError('age needs to be Number');
  }
  return user.name;
}

const user = {
  name: 'Gabriel',
  age: '20',
};


try {
  const result = getUserName(user);
  console.log('My name is ', result);
} catch (err) {
  console.error(err);
} finally {
  console.log('executo independente do resultado');
}


// Async

function getDinner(callback) {
  setTimeout(() => {
    console.log('dinner'); // <---
    callback();
  }, 1000);
}


function getDessert() {
  console.log('dessert');
}

getDinner(getDessert); // na excuçnao eu passei a função de callback

//  Set Timeout e SetInterval


// const timeoutID = setTimeout(() => console.log('2s passaram'), 2000);

let counter = 0;

const callBack = function () {
  console.log(counter);
  let timeoutId = setTimeout(callBack, 1000);
  counter += 1;
  if (counter > 10) clearTimeout(timeoutId);
};

const intervalId = setInterval(() => {
  console.log(counter);
  counter += 1;
  if (counter > 10) clearInterval(intervalId);
}, 1000);
