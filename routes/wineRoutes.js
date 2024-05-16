// Importa o controlador de cursos
const wineController = require('../controllers/wineController');
const express = require('express');
const router = express.Router();

// Define a rota para listar todos os vinhos
router.get('/wines', wineController.getAllWines);

// Define a rota para buscar um vinho pelo ID
router.get('/wines/:id', wineController.getWineById);

// Define a rota para criar um novo vinho
router.post('/wines/create', wineController.createWine);

// Define a rota para atualizar um vinho pelo ID
router.put('/wines/:id', wineController.updateWine);

// Define a rota para deletar um vinho pelo ID
router.delete('/wines/:id', wineController.deleteWine);

// Exporta o roteador para ser usado no app principal
module.exports = router;
