const chalk = require('chalk');
const nerds = require('nerds');

let pokemon = nerds.resolve('Pokemon', 1).include(['name', 'type']).asArray();
console.log(pokemon)

console.log(chalk.red(pokemon[0].name));
