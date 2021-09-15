const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://admin:helloadmin@cluster0.huuaj.mongodb.net/whySoSerious?retryWrites=true&w=majority';

const connect = async () => {
  const connection = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log(`DataBase connected: ${connection.connections[0].name}`);
};

module.exports = connect