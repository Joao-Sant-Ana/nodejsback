const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const CryptoJS = require('crypto-js');

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,POST'
}

app.use(cors(corsOptions));
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'usbw',
    database: 'teste'
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM estudantes WHERE nome = ? AND email = ? AND senha = ?";

    let password = CryptoJS.SHA256('Maria' + req.body.password + 'João')    ;
    password = password.toString(CryptoJS.enc.Hex);

    db.query(sql, [req.body.username, req.body.email, password], (err, data) => {
        if (err) return res.status(401).json('Login falhou');
        if (data.length > 0) {
            return res.json('Login feito com sucesso');
        } else {
            return res.json('Sem dados')
        }
    })
})

app.post('/signin', (req, res) => {
    const sql = "INSERT INTO estudantes (nome, email, senha) VALUES (?, ?, ?)";

    let password = 'Maria' + req.body.password + 'João';

    let hashedPass = CryptoJS.SHA256(password)
    hashedPass = hashedPass.toString(CryptoJS.enc.Hex)


    db.query(sql, [req.body.username, req.body.email, hashedPass], (err, data) => {
        if (err) return res.status(401).json('Registro falhou');
    })
})


app.listen(8081, () => {
    console.log('Listening...')
})