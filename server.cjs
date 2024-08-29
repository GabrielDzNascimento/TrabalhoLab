const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('projeto.html', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Erro ao ler o arquivo');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Página não encontrada');
  }
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});