const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('meu_banco.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados.');
});

module.exports = db;