const livreModel = require('../Modeles/modele.js');

const PostController = require("../Controller/postRequestController.js");
const postRequestController = new PostController();

module.exports = class PutController {
    putLivre(newElements, res) {
        if (newElements.numero != undefined) {
            livreModel.findOne({numero: newElements.numero},{_id: 0, titre: 1, pages: 1})
                                    .then((livre) => {
                                        if(livre == null) {
                                            postRequestController.postLivre(newElements, res);
                                        }
                                        console.log("modifié");
                                        if (livre.titre != newElements.titre) {
                                            livre.titre = newElements.titre
                                        }
                                        if (livre.pages != newElements.pages) {
                                            livre.pages = newElements.pages
                                        }
                                        livreModel.updateOne({numero: newElements.numero}, {titre: livre.titre, pages: livre.pages})
                                                    .then(() => res.json({status: "OK", livreModifié: livre}))
                                                    .catch(erreur => res.json({status: "Erreur", message: erreur}))
                                    })
                                    .catch((erreur) => console.log(erreur));
        } else {
            res.json({status: "Erreur", message: "Erreur d'ID"});
        }
    }
}