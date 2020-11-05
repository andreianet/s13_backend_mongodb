const express = require('express');
const router = express.Router();
const controller = require('../controllers/musicas-controller')

router.get('/musicas', controller.getMusicas)

router.post('/musicas', controller.addMusicas)

router.get('/musicas/:id', controller.getMusicasById)

router.put('/musicas/:id', controller.musicasUpdate)

router.delete('/musicas/:id', controller.deleteMusicas)

module.exports = router;