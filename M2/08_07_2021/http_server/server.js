const http = require('http');

const server = http.createServer((request, response) => {
  console.log('Alguem fez uma requisição');
  console.log(request.url);
  if (request.url === '/alunos') {
    response.write('alunos');
    response.end();
  } else if (request.url === '/cursos') {
    response.write('cursos');
    response.end();
  } else {
    response.statusCode = 404;
    response.write('404 erro');
    response.end();
  }
});

server.listen(3000);
