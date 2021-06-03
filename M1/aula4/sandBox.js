/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const object2 = new Object(); // <--- instancia = const object2 = {}

const name = 'Thais';

// Declaração literal de objeto

const object1 = {
  atributo2: 2, // string, array, bool, number, object, function
  'metodo de pagamento': 'cartao',
  atributo4: [1, 2, 3, 4],
  nome: name,
};

// acessar atributos:
const variavel = 'atributo4';

console.log(object1.atributo2); // dot notation

console.log(object1['atributo 3']); // colchetes

console.log(object1[variavel]);

// adicionar atributos

object1.endereco = 'Rua das hortencias';
object1['numero de parcelas'] = 3;


// alterar valores

object1.nome = 'Gabriel';

// remover atributos

delete object1.atributo2; // muito pouco utilizado

console.log(object1);

console.log('atributo1' in object1); // verifico se existe a chave dentro de um objeto, retorna true or false

console.log(Object.keys(object1)); // retorna todas as chave num array de strings

console.log(Object.values(object1)); // retorna todos os valores num array

// for in -- Objects

for (const key in object1) {
  console.log(key); // chaves
  console.log(object1[key]); // valores
}

const person = {
  name: 'Gabriel',
  age: 30,
};

person.occupation = 'Developer';

person.name = 'Marcio';

person.age = 50;

// console.log(person);

// Data Structures

const school = {
  name: 'IronHack',
  address: 'Alameda jau, 1301',
  onGoingCourses: [
    {
      type: 'WebDev',
      teacher: {
        name: 'Gabriel',
        age: 30,
      },
      tas: ['DK', 'Julia'],
      students: ['Pati', 'Francisco', 'Victor', 'Tiago', 'Carlos'],
    },
    {
      type: 'UX',
      teacher: {
        name: 'Bruno',
        age: 28,
      },
      tas: ['Li', 'Ricardo'],
      students: ['Gabriel', 'Carlos', 'Kleber'],
    },
  ],
};
// Acessar os TAs da turma de WebDev
console.log(school.onGoingCourses[0].tas);

// Quantos alunos tem na turma de WebDev
console.log(school.onGoingCourses[0].students.length);

// Adicionar um novo aluno na turma de UX
school.onGoingCourses[1].students.push('Tirulipa');

// Acessar os alunos da turma de UX
console.log(school.onGoingCourses[1].students);
