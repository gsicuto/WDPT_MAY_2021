const { Schema, model } = require('mongoose');

const jokeSchema = new Schema(
  {
    title: String,
    joke: { type: String, required: true, unique: true },
    author: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model('Joke', jokeSchema);