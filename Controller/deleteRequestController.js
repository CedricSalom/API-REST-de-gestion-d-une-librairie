const livreModel = require('../Modeles/modele.js');

module.exports = class DeleteController {
    deleteLivre(idLivre, res) {
        livreModel.deleteOne({numero: idLivre})
            .then(response => {
                if(response.deletedCount == 0) {
                    res.json({status: "Erreur", message: "Livre numero " + idLivre + " inexistant"})
                } else {
                    res.json({status: "OK", idLivreSupprimé: idLivre})
                }
            })
            .catch(erreur => res.json(erreur))
    }
}