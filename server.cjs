const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = 8081;



app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, path) => {
      if (path.endsWith('.css')) {
          res.set('Content-Type', 'text/css');
      }
  }
}));


const db = new sqlite3.Database('banco.db');

app.get('/', (req, res) => {
  db.all('SELECT * FROM caminhões', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Erro ao buscar dados');
    } else {
      res.render('index', { caminhões: rows });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
