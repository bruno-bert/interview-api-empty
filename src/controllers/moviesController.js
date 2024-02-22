const Movie = require('../models/Movie');

exports.getMoviesByYear = (req, res) => {
  const year = parseInt(req.query.year);
  const movies = Movie.getAllMovies();
  const filteredMovies = movies.filter(movie => movie.year === year);
  res.json(filteredMovies);
};