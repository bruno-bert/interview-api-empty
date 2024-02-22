const movies = [
    { title: 'Movie 1', genre: 'Action', year: 2020 },
    { title: 'Movie 2', genre: 'Comedy', year: 2019 },
    { title: 'Movie 3', genre: 'Drama', year: 2021 }
  ];
  
  class Movie {
    static getAllMovies() {
      return movies;
    }
  }
  
  module.exports = Movie;
  