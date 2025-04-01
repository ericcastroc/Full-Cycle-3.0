const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
});

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        process.exit(1);
    }
});

app.get('/', (req, res) => {
    const name = 'Usuário ' + Math.floor(Math.random() * 1000);
    connection.query(`INSERT INTO people(name) VALUES('${name}')`, (err) => {
        if (err) throw err;
    });

    connection.query(`SELECT name FROM people`, (err, results) => {
        if (err) throw err;

        let list = results.map(person => `<li>${person.name}</li>`).join('');
        res.send(`<h1>Full Cycle Rocks!</h1><ul>${list}</ul>`);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});