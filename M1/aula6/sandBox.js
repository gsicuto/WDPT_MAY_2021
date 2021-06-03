// Declaração Função -- Hoisting Toda declaração de função é executada antes de qq coisa

// console.log(calcSum(5, 3));

function calcSum(num1, num2) {
  return num1 + num2;
}

// função anonima

const calcSum2 = function (num1, num2) {
  return num1 + num2;
};

// arrow function

const calcSum3 = (num1, num2) => num1 + num2;

// console.log(calcSum(1, 2));
// console.log(calcSum2(1, 2));
// console.log(calcSum3(1, 2));

// callback

function eatDinner(funcaoDeCallBack) {
  // console.log('qqcoisa');
  // funcaoDeCallBack();
  setTimeout(() => {
    console.log('eating Dinner');
    funcaoDeCallBack(); // executo aqui <---
  }, 1000);
}

function eatDessert() {
  setTimeout(() => {
    console.log('eating Dessert');
  }, 2000);
}


// eatDinner(eatDessert); // executo primeiro
// eatDessert(); // executo por ultimo

// eatDinner(function (){ console.log('tomar refrigerante')});
// eatDinner( () => { console.log('tomar refrigerante') } );

const sayHello = name => `hi, ${name}`;

const sayHelloAndSayMyAge = (name, age) => `hi, ${name} you have ${age} years`;

const sayHelloAndItsMyBirthday = (name, age) => {
  const newAge = age + 1;
  return `hi, ${name} cograts you have ${newAge} years`;
};

// console.log(sayHello('Gabriel'));
// console.log(sayHelloAndSayMyAge('Gabriel', 30));
// console.log(sayHelloAndItsMyBirthday('Gabriel', 30));


const person = {
  name: 'Ana',
  age: 29,
  getOlder() {
    setInterval(() => {
      this.age += 1;
      console.log(this);
    }, 1000);
  },
};


// person.getOlder();

// const interval = setInterval(() => console.log('oi'), 1000);

// setTimeout(() => clearInterval(interval) , 3000)

function Myfunc() {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[2]);
}

// Myfunc('Gabriel', 'Jonas', 23);


// Metodos de Array (High Order Functions) Funcoes ou metodos que recebem como argumento outra funcao

// Array.nomeDoMetodo()

// forEach

const numbers = [1, 2, 3, 4, 6, 8, 10, 165, 322];

function mostraNumero (number) {
  console.log(number)
}

// numbers.forEach(mostraNumero);
const result = numbers.forEach(number => number * 2);

// console.log(numbers);
// console.log(result);


// Map 

const resultMap = numbers.map(number => number * 2);

console.log('esse é o Array original', numbers);
console.log('esse é o resultado do Map', resultMap);


const studentsGrades = [
  {
    name: 'Tony Parker',
    firstProject: 80,
    secondProject: 75,
    finalExam: 90,
  },
  {
    name: 'Marc Barchini',
    firstProject: 84,
    secondProject: 65,
    finalExam: 65,
  },
  {
    name: 'Claudia Lopez',
    firstProject: 45,
    secondProject: 95,
    finalExam: 99,
  },
  {
    name: 'Alvaro Briattore',
    firstProject: 82,
    secondProject: 92,
    finalExam: 70,
  },
  {
    name: 'Isabel Ortega',
    firstProject: 90,
    secondProject: 32,
    finalExam: 85,
  },
  {
    name: 'Francisco Martinez',
    firstProject: 90,
    secondProject: 55,
    finalExam: 78,
  },
  {
    name: 'Jorge Carrillo',
    firstProject: 83,
    secondProject: 77,
    finalExam: 90,
  },
  {
    name: 'Miguel López',
    firstProject: 80,
    secondProject: 75,
    finalExam: 75,
  },
  {
    name: 'Carolina Perez',
    firstProject: 85,
    secondProject: 72,
    finalExam: 67,
  },
  {
    name: 'Ruben Pardo',
    firstProject: 89,
    secondProject: 72,
    finalExam: 65,
  },
]


const finalGrades = studentsGrades.map((studentGrade) => {
  const projectAvg = (studentGrade.firstProject + studentGrade.secondProject) / 2;
  // console.log('Media Projetos', projectAvg);
  const finalGrade = studentGrade.finalExam * 0.6 + projectAvg * 0.4;
  // console.log(finalGrade);
  let aproved = false;
  if (finalGrade > 80) {
    aproved = true;
  }
  return {
    name: studentGrade.name,
    finalGrade: finalGrade,
    aproved: aproved,
  };
});

console.log(finalGrades);
// Filter
const aprovedStudents = finalGrades.filter(grade => grade.finalGrade > 80);

const reprovedStudents = finalGrades.filter(grade => grade.finalGrade < 80);

console.log(aprovedStudents);
console.log(reprovedStudents);


// Reduce  Reduz a um unico numero / elemento

// [1, 2, 3, 4, 6, 8, 10, 165, 322];


// const sum = 0

// for(let i = 0; i < numbers.length; i += 1){
//   sum += numbers[i]
// }

const sum = numbers.reduce((acc, number, index) => {
  if (index >= 5) {
    return acc + number;
  }
}, 0);

const nomes = ['Marcia', 'Marcio', 'Dobgberto', 'Ana'];

const sizeWords = nomes.reduce((acc, nome) => acc + nome);

console.log(sizeWords);
// console.log(sum);


// Formas de declarar:

function nomeDaFuncao () { // somente essa funcao tem hoisting (içar)
  //o que ela faz
}
// funcoes anonimas

// arrow function

const nomeDaArrowFuncao = () => {
  // o que ela faz
};

const nomeDaFuncao2 = function () {
  // o que a funçao faz
};

// High order Functions (funções que recebem funções como parametro)

let array = [1, 2, 5, 4, 8, 0];

// array.map(function (elemento) {

// })
// array.map((elemento) => {})

// map, filter, reduce

// Reverse
console.log('antes do reverse', array);

console.log(array.reverse());

console.log('depois do reverse', array);

// Sort

let nomesOrder = ['Gabriel', 'Carlos', 'Aana', 'Ana', 'alberto'];

// nomesOrder.sort();
console.log(nomesOrder);

// nomesOrder.sort((a, b) => {
//   if (a.toUpperCase() > b.toUpperCase()) {
//     return 1;
//   }
//   if (a.toUpperCase() < b.toUpperCase()) {
//     return -1;
//   }
//     return 0;
// })

// console.log(nomesOrder);

let people = [
  { name: 'Carlos', birthYear: 1989 },
  { name: 'Ana', birthYear: 1989 },
  { name: 'Joana', birthYear: 1993 },
  { name: 'Debora', birthYear: 1990 },
];

people.sort((a, b) => {
  if (a.birthYear - b.birthYear === 0) {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1; // return
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  }
  return a.birthYear - b.birthYear;
});

console.log(people);

