const Movie = require('../models/Movie');

const filter={title: 'House'};

module.exports.Delete = (req, res) => {
    Movie.findOneAndDelete(filter)
        .then((movie) => {
            console.log(movie);
        })
        .catch(err => console.error(err));
};
