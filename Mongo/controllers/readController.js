const Movie = require('../models/Movie');
module.exports.read = (req, res) => {
    Movie.findOne({ title: 'Interstellar' })
    .then((movie) => {
        console.log(movie);
})
    .catch(err => 
        res.status(400).send(err))
    }