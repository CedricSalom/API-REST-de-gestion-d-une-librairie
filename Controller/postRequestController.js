const livreModel = require('../Modeles/modele.js');

module.exports = class PostController {
    postLivre(newElements, res) {

        let livre = new livreModel({
            numero: newElements.numero,
            titre: newElements.titre,
            pages: newElements.pages
        });
        
        livre.validate()
            .then(() => { return livre.save() })
            .then(() => res.json({status: "OK", livreAjouté: livre }))
            .catch((erreur) => res.json({status: "Erreur", message: erreur.message }))
    }
}