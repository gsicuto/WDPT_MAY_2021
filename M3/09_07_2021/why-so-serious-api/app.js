const express = require('express');
const connectDb = require('./config/db.config');

const Joke = require('./models/Joke');

const PORT = 5000;

// Connect to DataBase
connectDb();

const app = express();

// Utilizar o json no body das requisições
app.use(express.json());

app.post('/jokes', async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ msg: 'missing title field' });
  }
  try {
    // criar uma nova piada no banco de dados
    const newJoke = await Joke.create(req.body);
    // retornar json da piada criada
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ msg: 'ServerError', error });
  }
});

app.get('/jokes', async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ msg: 'ServerError', error });
  }
});

app.listen(PORT, () => console.log(`Server listen on Port ${PORT}`));
