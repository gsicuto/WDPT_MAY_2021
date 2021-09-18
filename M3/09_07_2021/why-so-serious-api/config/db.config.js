const mongoose = require('mongoose');

const connect = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log(`DataBase connected: ${connection.connections[0].name}`);
};

module.exports = connect