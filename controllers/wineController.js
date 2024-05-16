// Importa a classe Wine do modelo
const Wine = require('../models/wineModel');
const wineModel = new Wine();

// Classe WineController para gerenciar as operações dos vinhos
class WineController {
    // Método para retornar todos os vinhos
    getAllWines(req, res) {
        const wines = wineModel.getAllWines();
        res.json(wines);
    }

    // Método para criar um novo vinho
    createWine(req, res) {
        const { name, description, year, price, img } = req.body;
        const newWine = wineModel.createWine(name, description, year, price, img);
        res.status(201).redirect('/adicionar');
    }

    // Método para buscar um vinho pelo ID
    getWineById(req, res) {
        const wineId = req.params.id;
        const wine = wineModel.getWineById(wineId);
        if (!wine) {
            return res.status(404).json({ msg: 'Wine not found' });
        }
        res.json(wine);
    }

    // Método para deletar um vinho pelo ID
    deleteWine(req, res) {
        const wineId = req.params.id;
        const wineDeleted = wineModel.deleteWine(wineId);
        if (!wineDeleted) {
            return res.status(404).json({ msg: 'Wine not found' });
        }
        res.json({ msg: 'Wine deleted successfully' });
    }

    // Método para atualizar um vinho pelo ID
    updateWine(req, res) {
        const wineId = req.params.id;
        const { name, description, year, price } = req.body;
        const wineUpdate = wineModel.updateWine(wineId, name, description, year, price);
        if (!wineUpdate) {
            return res.status(404).json({ msg: 'Wine not found' });
        }
        res.json({ wineUpdate });
    }
}

// Exporta uma instância do controlador para ser usada em outros módulos
module.exports = new WineController();
