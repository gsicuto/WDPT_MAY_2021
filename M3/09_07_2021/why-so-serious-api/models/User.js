const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    favoriteJokes: [{ type: Schema.Types.ObjectId, ref: 'Joke' }],
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', userSchema);