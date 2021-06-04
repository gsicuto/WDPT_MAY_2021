// let tabuleiro = [0, 10, -20, 30, 50, -10, -100, -1000, 1000, 0, 10];

// let player1 = {
//   name: 'Jose',
//   color: 'blue',
//   position: 0,
//   cash: 1000,
// };

// let player2 = {
//   name: 'Alberto',
//   color: 'red',
//   position: 0,
//   cash: 1000,
// };

// // Primeira Rodada

// // dado de 6 lados aleatorio
// let dice = 1 + Math.floor(Math.random() * 6);
// // altero a posição do meu player de acordo com o resultado do dado
// player1.position = (player1.position + dice) % tabuleiro.length;
// player1.cash += tabuleiro[player1.position];
// if (player1.cash < 0) console.log(`Game Over for ${player1.name}`);

// //player2

// dice = 1 + Math.floor(Math.random() * 6);
// player2.position = (player2.position + dice) % tabuleiro.length;
// player2.cash += tabuleiro[player2.position];
// if (player2.cash < 0) console.log(`Game Over for ${player2.name}`);

// // Segunda Rodada

// // dado de 6 lados aleatorio
// dice = 1 + Math.floor(Math.random() * 6);
// // altero a posição do meu player de acordo com o resultado do dado
// player1.position = (player1.position + dice) % tabuleiro.length;
// player1.cash += tabuleiro[player1.position];
// if (player1.cash < 0) console.log(`Game Over for ${player1.name}`);

// //player2

// dice = 1 + Math.floor(Math.random() * 6);
// player2.position = (player2.position + dice) % tabuleiro.length;
// player2.cash += tabuleiro[player2.position];
// if (player2.cash < 0) console.log(`Game Over for ${player2.name}`);


// // Display Info

// console.log(player1);
// console.log(player2);

// Novo Jogo

const tabuleiro = [0, 10, -20, 30, 50, -10, -100, -1000, 1000, 0, 10];

// function move (player) {
//     let dice = 1 + Math.floor(Math.random() * 6);
//     // altero a posição do meu player de acordo com o resultado do dado
//     player.position = (player.position + dice) % tabuleiro.length;
//     player.cash += tabuleiro[player.position];
//     if (player.cash < 0) console.log(`Game Over for ${player.name}`);
// }

// let player1 = {
//   name: 'Jose',
//   color: 'blue',
//   position: 0,
//   cash: 1000,
//   move() {
//     let dice = 1 + Math.floor(Math.random() * 6);
//     // altero a posição do meu player de acordo com o resultado do dado
//     this.position = (this.position + dice) % tabuleiro.length;
//     this.cash += tabuleiro[this.position];
//     if (this.cash < 0) console.log(`Game Over for ${this.name}`);
//   },
//   displayInfo() {
//     console.log(`${this.name} na posicao ${this.position} tem R$ ${this.cash}`);
//   },
// };

// let player2 = {
//   name: 'Alberto',
//   color: 'red',
//   position: 0,
//   cash: 1000,
//   move() {
//     let dice = 1 + Math.floor(Math.random() * 6);
//     // altero a posição do meu player de acordo com o resultado do dado
//     this.position = (this.position + dice) % tabuleiro.length;
//     this.cash += tabuleiro[this.position];
//     if (this.cash < 0) console.log(`Game Over for ${this.name}`);
//   },
//   displayInfo() {
//     if (this.cash < 0) console.log(`Game over for ${this.name}`);
//     else console.log(`${this.name} na posicao ${this.position} tem R$ ${this.cash}`);
//   },
// };

// // Primera Rodada:
// player1.move();
// player2.move();


// // Segunda Rodada:
// player1.move();
// player2.move();

// // Terceira Rodada:
// player1.move();
// player2.move();


// display info

// player1.displayInfo();
// player2.displayInfo();

// setInterval(() => {
//   player1.move();
//   player2.move();
//   player1.displayInfo();
//   player2.displayInfo();
// }, 1000);

// Abstração


// Classe

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0; // Hard Coded
    this.cash = 1000;
  }

  move() {
    const dice = 1 + Math.floor(Math.random() * 6);
    // altero a posição do meu player de acordo com o resultado do dado
    this.position = (this.position + dice) % tabuleiro.length;
    this.cash += tabuleiro[this.position];
    if (this.cash < 0) console.log(`Game Over for ${this.name}`);
  }

  displayInfo() {
    console.log(`${this.name} na posicao ${this.position} tem R$ ${this.cash}`);
  }
}

// Instaciar novos Jogadores:
const player1 = new Player('Alberto', 'blue');
const player2 = new Player('Yoda', 'red');

// Primeira Rodada:
player1.move();
player2.move();

// Segunda Rodada:
player1.move();
player2.move();

// Mostra info:
// player1.displayInfo();
// player2.displayInfo();

const players = [];

for (let i = 0; i < 4; i += 1) {
  players.push(new Player(i, i));
}

players.forEach(player => player.move());

// console.log(players);


class Animal {
  constructor(peso, patas, sound, cor) {
    this.peso = peso;
    this.numeroDePatas = patas;
    this.cor = cor;
    this.sound = sound;
  }

  grito(intensidade) {
    console.log(`${this.sound} ${'!'.repeat(intensidade)}`);
  }
}

class Mamifero extends Animal {
  constructor(peso, patas, sound, cor, tempoDeGestacao) {
    super(peso, patas, sound, cor);
    this.tempoDeGestacao = tempoDeGestacao;
  }
}

class Camaleao extends Animal {
  constructor(peso) {
    super(peso, 4, 'Shhhh', 'green');
  }

  changeColor(color) {
    this.cor = color;
  }
}

const gato = new Mamifero(4, 4, 'Miau', 'cinza', 2);
const alberto = new Camaleao(1.5);
const baleia = new Animal(1000, 0, 'Mmmmmmmm', 'blue', 123);


console.log(baleia);


console.log(alberto);

alberto.changeColor('blue');

console.log(alberto);

console.log(gato);
gato.grito(6);

// Modelo antigo de escrever Classes antes do ES6
// Construtor no modelo antigo

// function Person (name) {
//   this.name = name;
// };

// Criar um metodo para uma classe

// Person.prototype.sayMyName = function() {
//   console.log(this.name);
// }

// let person =  new Person('Gabriel');

// person.sayMyName();