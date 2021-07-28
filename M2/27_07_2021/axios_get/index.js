const axios = require("axios");

axios
  .get("https://api.giphy.com/v1/gifs/random", {
    headers: { api_key: "qFFYWBg23r6dEaQNqHCnSGaWKjFmSf3o" },
  })
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => console.log(err.message));

// axios({
//   method: 'GET',
//   url: 'https://api.giphy.com/v1/gifs/random',
//   params: {
//     api_key: 'qFFYWBg23r6dEaQNqHCnSGaWKjFmSf3o',
//   }
// }).then((result) => {
//   console.log(result.data);
// }).catch(err => console.log(err.message));
