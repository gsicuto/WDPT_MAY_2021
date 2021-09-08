const express = require('express');
const connectDb = require('./config/db.connect');
const User = require('./models/User');

connectDb();

const app = express();

// Middleware
// permite que o express interprete o body se for json type
app.use(express.json());

// Routes:

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: 'Erro ao buscar usuários', error });
  }
});

app.post('/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ msg: 'Erro ao criar novo usuário', error });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
