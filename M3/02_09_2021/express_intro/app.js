const express = require('express'); // Require do express

const app = express(); // servidor Express

app.use(express.static('public'));

// Primeira Rota
app.get('/home', (request, response, next) => {
  console.log(request);
  response.send('<h1> Hello World!!!</h1>');
});

app.get('/cat', (request, response, next) => {
  // console.log(request);
  console.log(__dirname);
  response.sendFile(`${__dirname}/views/cat-page.html`);
});

app.get('/search', (request, response) => {
  console.log(request.query);
  response.send(request.query);
});

app.get('/alunos/:name', (request, response, next) => {
  console.log(request.params);
  response.send(request.params);
});

app.get('/alunos/profile', (request, response) => {
  response.send('primeira rota');
});

// Inicio o meu servidor
app.listen(3000, () => console.log('Servidor ligado na porta 3000'));
