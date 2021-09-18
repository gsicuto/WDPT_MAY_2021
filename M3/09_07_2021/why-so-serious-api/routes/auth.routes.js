const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = Router();

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      throw new Error('username already exists');
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      username,
      passwordHash,
    });

    res.status(201).json({
      username: newUser.username,
      favoriteJokes: newUser.favoriteJokes,
    });
  } catch (error) {
    res.status(500).json({ msg: 'Error While Create user', error: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('username not found');
    }
    const compareHash = bcrypt.compareSync(password, user.passwordHash);

    if (!compareHash) {
      throw new Error('username or password incorrect');
    }
    const payload = {
      id: user.id,
      username: user.username,
    };

    const token = jwt.sign(
      payload,
      process.env.SECRET_JWT,
      { expiresIn: '1day' },
    );

    res.status(200).json({ payload, token });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
