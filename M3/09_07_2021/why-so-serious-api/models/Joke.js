const { Schema, model } = require('mongoose');

const jokeSchema = new Schema(
  {
    title: String,
    joke: { type: String, required: true, unique: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Joke', jokeSchema);