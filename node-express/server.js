const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

//send
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})
//escutador
app.listen(port,callback ?: >= void);
console.log("servidor iniciado com susesso na porta:" + port);
//contante que mostra o caminho do arquivo principal qd executado
// console.log(__dirname)
// console.log(process.cwd())
