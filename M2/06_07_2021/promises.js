// let procrastinar = false

// const lavarALouca = new Promise ((resolve, reject) => {
//   if (procrastinar) {
//     reject('não fiz');
//   } else {
//     resolve('A Louça ta no grau mami');
//   }
// });

// console.log(lavarALouca);

function cook(name, tempo, callback) {
  return new Promise((resolve, reject) => {
    if (tempo < 3000) {
      reject('Pouco tempo nem liguei o fogão');
    }
    setTimeout(() => {
      resolve(`O ${name} está pronta`);
      if (callback) {
        callback(`O ${name} está pronta`);
      }
    }, tempo);
  });
}

// console.log(cook('sopa', 2000));

// cook('sopa', 2000)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(err => console.log(err))
//   .finally(() => console.log('executei'));

// cook('sopa', 4000, result => console.log(result));


// async / await;

async function makefood() {
  let result = await cook('sopa', 2000);
  console.log(result);
}


let sopa = cook('sopa', 4000);
let bife = cook('bife', 6000);
let strogonoff = cook('strogonoff', 7000);

// let food = makefood();


Promise.all([sopa, bife, strogonoff, cook('brigadeiro', 3010)]).then((result) => {
  console.log(result);
});