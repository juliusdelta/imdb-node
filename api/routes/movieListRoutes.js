'use strict';

module.exports = function(app) {
    var movieList = require('../controllers/movieListController');

    app.route('/movies')
        .get(movieList.list_all_movies)
        .post(movieList.create_a_movie);

    app.route('/movies/:movieId')
        .get(movieList.read_a_movie)
        .put(movieList.update_a_movie)
        .delete(movieList.delete_a_movie);
};
