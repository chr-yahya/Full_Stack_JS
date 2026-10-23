const Movie = require('../models/Movie');

const form = (req, res) => {
    const movieId = req.query.movieId;

    if (!movieId) {
        return res.render('pages/form', { movie: null });
    }

    Movie.findById(movieId)
        .then((selectedMovie) => {
            if (!selectedMovie) {
                return res.status(404).send('Film introuvable.');
            }

            res.render('pages/form', { movie: selectedMovie });
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

module.exports = { form };
