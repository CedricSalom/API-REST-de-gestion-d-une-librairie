const express = require("express");
const router = express.Router();

const GetController = require("../Controller/getRequestController.js");
const getRequestController = new GetController();

const PostController = require("../Controller/postRequestController.js");
const postRequestController = new PostController();

const DeleteController = require("../Controller/deleteRequestController.js");
const deleteRequestController = new DeleteController();

const PutController = require("../Controller/putRequestController.js");
const putRequestController = new PutController();

/*----- Get -----*/
router.get("/", (req, res) => {
    getRequestController.getRacine(res);  
});
router.get("/livres", (req, res) => {
    getRequestController.getAllLivres(res);
});

router.get("/livres/:numlivre", (req, res) => {
    getRequestController.getLivre(res, parseInt(req.params.numlivre, 10));
});

router.get("/livres/:numlivre/pages", (req, res) => {
    getRequestController.getAllPagesFromLivreId(res, parseInt(req.params.numlivre, 10));
});

router.get("/livres/:numlivre/pages/:numpage", (req, res) => {
    getRequestController.getAPageFromLivreId(res, parseInt(req.params.numlivre, 10), parseInt(req.params.numpage, 10));
});


/*----- Post -----*/
router.post("/livres", (req, res) => {
    postRequestController.postLivre(req.body, res);
});

/*----- Delete -----*/
router.delete("/livres/:numLivre", (req, res) => {
    deleteRequestController.deleteLivre(req.params.numLivre, res)
});

/*----- Put -----*/
router.put("/livres", (req, res) => {
    putRequestController.putLivre(req.body, res)
});

module.exports = router;