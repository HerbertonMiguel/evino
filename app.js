const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const wineRoutes = require('./routes/wineRoutes'); // Importa o arquivo de rotas de vinhos


app.use(express.static('public')); // Serve arquivos estáticos da pasta 'public'
app.use(express.json()); // Middleware para parsear requisições com JSON
app.use(express.urlencoded({ extended: false })); // Middleware para parsear requisições com dados URL-encoded
app.use(wineRoutes); // Usa as rotas de vinhos

// Define a rota principal para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
});

// Define a rota adicionar para a página adicionar vinho
app.get('/adicionar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'add.html'));
});

// Define a rota para a página de edição de cursos
app.get('/editar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'edit.html'));
});

// Inicia o servidor na porta definida
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});