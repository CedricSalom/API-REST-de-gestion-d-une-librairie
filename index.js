const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./Router/router.js');

mongoose.connect("mongodb://localhost/APILivres");
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'erreur connexion :'));
db.once('open', function() {
  console.log('Connecté');
});

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`PORT Listen At ${PORT}`);
});
