const livreModel = require('../Modeles/modele.js');

module.exports = class GetController {

    getRacine(res) {
        res.send("API de gestion des livres");
    }

    getAllLivres(res){
        livreModel.find({},{_id: 0, numero: 1, titre: 1, pages: 1})
        .then((livres) => {
            res.json({ status: "OK", livres: livres });
        })
        .catch((erreur) => console.error(erreur.message));
    }
    
    getLivre(res, numeroLivre) {
        livreModel.find({numero: numeroLivre},{_id: 0, numero: 1, titre: 1})
        .then((livres) => {
            if(livres.length > 0) {
                res.json({ status: "OK", livres : livres });
            } else {
                res.json({ status: "OK", message: "Pas de livre trouvé pour l'id " + numeroLivre});
            }
        })
        .catch((erreur) => console.error(erreur.message));
    }

    getAllPagesFromLivreId(res, numeroLivre) {
        livreModel.find({numero: numeroLivre},{_id: 0, numero: 1, pages: 1})
        .then((livres) => {
            if(livres.length > 0) {
                res.json({ status: "OK", livres: livres });
            } else {
                res.json({ status: "OK", message: "Pas de livre trouvé pour l'id " + numeroLivre });
            }
        })
        .catch((erreur) => console.error(erreur.message));
    }

    getAPageFromLivreId(res, numeroLivre, pageId) {
        livreModel.find({numero: numeroLivre},{_id: 0, titre: 1, pages: 1})
        .then((livres) => {
            if(livres.length == 0) {
                res.json({ status: "OK", message: "Pas de livre trouvé pour l'id " + numeroLivre});
            } else {
                if(typeof livres[0].pages[pageId] !== 'undefined' && livres[0].pages[pageId].length > 0) {
                    res.json({ status: "OK", page: livres[0].pages[pageId] });
                } else {
                    res.json({ status: "OK", message: "Pas de page trouvé pour l'id de livre " + numeroLivre + " et l'id de page " + pageId});
                }
            }
        })
        .catch((erreur) => console.error(erreur.message));
    }
}