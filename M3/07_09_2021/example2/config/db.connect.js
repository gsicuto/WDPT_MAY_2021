const mongoose = require('mongoose');

const connectDb = async () => {
  const connect = await mongoose.connect('mongodb+srv://admin:helloadmin@cluster0.huuaj.mongodb.net/storehomol?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Connected to Mongo! Database name: "${connect.connections[0].name}"`);
};

module.exports = connectDb;
