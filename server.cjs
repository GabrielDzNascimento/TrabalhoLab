const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const ejs = require('ejs');

const app = express();
const port = 8081;

// Configuração do EJS
app.set('view engine', 'ejs');

// Conexão com o banco de dados
const db = new sqlite3.Database('banco.db');

// Rota para a página inicial
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
