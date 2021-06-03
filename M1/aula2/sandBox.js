// Booleans -> true or false
// > maior < menor == igualdade
// || - ou (or) && - e (and) ! - not
// ordem de execução ! > && > ||


// undefined

// let value = null;


// if(!value){
//   console.log('verdade');
// }else {
//   console.log('falso');
// }

// imutable

// let city = 'sao paulo';

// city = 'Sao Paulo';

// console.log(city[0]);

// let idade = 33;

// if (idade >= 18 && idade <= 120) {
//   console.log('Pode dirigir');
//   if (idade % 2 === 0) {
//     console.log('Sua idade é par');
//   } else {
//     console.log('Sua idade é impar');
//   }
// } else if (idade > 120) {
//   console.log('me conta o segredo');
// } else {
//   console.log('ainda não pode dirigir');
// }


// Switch

// let idade = [3, 2, 4];

// switch (idade[0]) {
//   case 1:
//     console.log('estou no case 1');
//     break;
//   case 2:
//     console.log('estou no case 2');
//     break;
//   case 3:
//     console.log('estou no case 3');
//     break;
//   default:
// }

// loops


// while
// let index = 0;


// while (index < word.length) {
  //   console.log(word[index]);
  //   if (index === 4){
    //     break;
    //   }
    //   index += 1;
    // }
    
    // do while
    
    // do {
      //   console.log(word[index]);
      //   index += 1;
      // } while (index < word.length);
      
      
      // for
      
let word = 'paralelepipedo';
let contrario = '';

for (let i = word.length - 1; i >= 0; i -= 1) {
  contrario += word[i];
  console.log(contrario);
}
        // for of
        
let array = ['Gabriel', 'Marcio', 'Johnny'];

// for (let word of array){
//     console.log(word);
// }