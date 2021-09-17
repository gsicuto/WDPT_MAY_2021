const bcrypt = require('bcryptjs');

const password1 = 'HelloIronhack';
const password2 = 'helloIronhack';



const salt = bcrypt.genSaltSync(10);

const hash1 = bcrypt.hashSync(password1, salt);
const hash2 = bcrypt.hashSync(password2, salt);

console.log(salt);
console.log(password1, 'hash -->', hash1);
console.log(password2, 'hash -->', hash2);

const verifyPass = bcrypt.compareSync(password1, hash1);
const verifyPass2 = bcrypt.compareSync(password1, hash2);

console.log(verifyPass);
console.log(verifyPass2);


// const bcrypt = require('bcryptjs');
// const plainPassword1 = 'HelloWorld';

// for (let saltRounds = 10; saltRounds < 19; saltRounds++) {
//   console.time(`bcrypt | cost: ${saltRounds}, time to hash`);
//   bcrypt.hashSync(plainPassword1, saltRounds);
//   console.timeEnd(`bcrypt | cost: ${saltRounds}, time to hash`);
// }

