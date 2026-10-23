const Movie = require('../models/Movie');
const movieData = {
    title:'House'
}

module.exports.create = (req, res) => {
    Movie.create(movieData)
    .then((movie) => {
        console.log('Movie created:', movie);
    })
    .catch(err => {
        res.status(400).send(err);
    })
}