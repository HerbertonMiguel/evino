// Variável global para gerar IDs únicos para os vinhos
let chave = 1;

class Wine {
    constructor() {
        // Vetor que simula um banco de dados de vinhos
        this.wines = [];
    }

    // Método para retornar todos os vinhos
    getAllWines() {
        return this.wines;
    }

    // Método para criar um novo vinhos
    createWine(name, description, year, price, img) {
        // Gera um ID único para o novo vinhos
        const id = `v${chave++}`;
        const newWine = { id, name, description, year, price, img};
        // Adiciona o novo curso à lista de vinhos
        this.wines.push(newWine);
        return newWine;
    }

    // Método para buscar um vinhos pelo ID
    getWineById(id) {
        // Procura o vinho pelo ID
        const wineResult = this.wines.find(wine => wine.id === id);
        return wineResult;
    }

    // Método para deletar um vinho pelo ID
    deleteWine(id) {
        // Encontra o índice do vinho a ser deletado
        const wineIndex = this.wines.findIndex(wine => wine.id === id);
        if (wineIndex !== -1) {
            // Remove o vinho da lista
            this.wines.splice(wineIndex, 1);
            return true;
        }
        return false;
    }

    // Método para atualizar um vinho pelo ID
    updateWine(name, description, year, price, img) {
        // Encontra o índice do vinho a ser atualizado
        const wineIndex = this.wines.findIndex(wine => wine.id === id);
        if (wineIndex !== -1) {
            // Atualiza o nome e a descrição do vinho
            this.wines[wineIndex].name = name;
            this.wines[wineIndex].description = description;
            this.wines[wineIndex].name = year;
            this.wines[wineIndex].description = price;
            this.wines[wineIndex].description = img;
            return this.wines[wineIndex];
        }
        return null;
    }

}

module.exports = Wine