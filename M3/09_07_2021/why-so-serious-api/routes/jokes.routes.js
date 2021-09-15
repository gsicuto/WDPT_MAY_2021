const { Router } = require('express');

const Joke = require('../models/Joke');

const router = Router();

router.post('/', async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ msg: 'missing title field' });
  }
  try {
    // criar uma nova piada no banco de dados
    const newJoke = await Joke.create(req.body);
    // retornar json da piada criada
    return res.status(201).json(newJoke);
  } catch (error) {
    return res.status(500).json({ msg: 'ServerError', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ msg: 'ServerError', error });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const joke = await Joke.findById(id);
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ msg: 'Error on find joke', error });
  } 
});

router.put('/:id', async (request, response) => {
  const { id } = request.params;
  const payload = request.body;
  try {
    const updatedJoke = await Joke.findOneAndUpdate({ _id: id }, payload, { new: true });
    response.status(200).json(updatedJoke);
  } catch (error) {
    response.status(500).json({ msg: 'Error while updating joke', error });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Joke.findByIdAndDelete(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ msg: 'Error while deleting joke', error });
  }
});

module.exports = router;