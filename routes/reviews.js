const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/albums/:id/reviews', reviewsCtrl.create);
router.get('/albums/:albumid/reviews/:reviewid/edit', reviewsCtrl.edit);
router.put('/albums/:albumid/reviews/:reviewid', reviewsCtrl.update);
router.delete('/albums/:albumid/reviews/:reviewid', reviewsCtrl.delete);


module.exports = router;