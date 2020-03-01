const express = require('express');
const router = express.Router();
const albumsCtrl = require('../controllers/albums');

router.get('/', albumsCtrl.index);

module.exports = router;
