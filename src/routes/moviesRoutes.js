const express = require('express');
const movieController = require('../controllers/moviesController');
const router = express.Router();

router.get('/', movieController.getMoviesByYear);

module.exports = router;