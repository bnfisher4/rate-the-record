const express = require('express');
const router = express.Router();
const artistsCtrl = require('../controllers/artists');

router.get('/', artistsCtrl.index);

module.exports = router;