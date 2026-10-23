const Movie = require('../models/Movie');

module.exports.Delete = (req, res) => {
    const id = req.query.movieId;

    if (!id) {
        return res.status(400).send('movieId est requis.');
    }

    Movie.findByIdAndDelete(id)
        .then((movie) => {
            if (!movie) {
                return res.status(404).send('Film introuvable.');
            }

            console.log(movie);
            res.redirect('/movies');
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};
