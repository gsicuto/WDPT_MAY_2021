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

app.get('/joke/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const joke = await Joke.findById(id);
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ msg: 'Error on find joke', error });
  } 
});

app.put('/joke/:id', async (request, response) => {
  const { id } = request.params;
  const payload = request.body;
  try {
    const updatedJoke = await Joke.findOneAndUpdate({ _id: id }, payload, { new: true });
    response.status(200).json(updatedJoke);
  } catch (error) {
    response.status(500).json({ msg: 'Error while updating joke', error });
  }
});

app.delete('/joke/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Joke.findByIdAndDelete(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ msg: 'Error while deleting joke', error });
  }
 });


app.listen(PORT, () => console.log(`Server listen on Port ${PORT}`));
