const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:helloadmin@cluster0.huuaj.mongodb.net/exampledb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((result) => {
  console.log(`Successfuly connected to Db ${result.connections[0].name}`);

  const Cat = mongoose.model('Cat', {
    name: String,
    age: Number,
  });

  // const matilde = new Cat({ name: 'Matilde', age: 7 });

  // matilde.save()
  //   .then(result => console.log('New Cat created', result))
  //   .catch(err => console.log(err));

  // Outra forma de criar um novo documento dentro de uma coleção    
  // Cat.create({ name: 'Robson', age: 3 })
  //   .then(result => console.log('New Cat created', result))
  //   .catch(err => console.log(err));

  // Buscar todos os gatos:

  Cat.find({ name: 'Robson' }, { name: 1, age: 1, _id: 0 })
    .then(result => console.log(result))
    .catch(err => console.log(err));

})
  .catch(err => console.log('Error connecting do DB', err));
