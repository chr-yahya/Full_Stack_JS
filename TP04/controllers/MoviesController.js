const Movie = require('../models/Movie');
module.exports.list = (req, res) => {
    Movie.find()
    .sort({title:"asc"})
    .then(movies => {
        res.render('pages/movies', {movies: movies});
})
    .catch(err => 
        res.status(400).send(err))
    }