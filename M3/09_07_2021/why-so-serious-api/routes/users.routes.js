const { Router } = require('express');
const User = require('../models/User');

const router = Router();

router.post('/user', async (req, res) => {
  const payload = req.body;
  try {
    const newUser = await User.create(payload);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ msg: 'Error while creating user', error });
  }
});

router.get('/user', async (req, res) => {
  try {
    const users = await User.find().populate('favoriteJokes');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/user/addjoke/:userid/:jokeid', async (req, res)=> {
  const { userid, jokeid } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(userid, { $push: { favoriteJokes: jokeid } }, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }

})

module.exports = router;
