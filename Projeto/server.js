const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para analisar dados de formulário recebidos
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Lidar com o envio do formulário de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Simule a validação do usuário (substitua pela sua própria lógica)
    if (username === 'adm' && password === '123456') {
        res.send('Login foi bem sucedido!!!!');
    } else {
        res.send('Nome de usuário ou senha inválidos.');
    }
});

// Inicie o servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
