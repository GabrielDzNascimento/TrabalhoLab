const express = require('express');
const connection = require('./banco.cjs');

const app = express();

// ... (restante do seu código)

app.get('/dados', (req, res) => {
  connection.query('SELECT * FROM caminhões', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(8081,function(){
    console.log("servidor online")
});