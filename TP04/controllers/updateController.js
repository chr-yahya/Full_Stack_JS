const Movie = require('../models/Movie');

module.exports.update = (req, res) => {
    const id = req.params.id || req.query.movieId;
    const body = req.body || {};

    if (!id) {
        return res.status(400).send('movieId est requis.');
    }

    const movieData = {
        title: body.title,
        synopsis: body.synopsis
    };

    if (req.file) {
        movieData.image = `/data/uploads/${req.file.filename}`;
    }

    Movie.findByIdAndUpdate(id, movieData, {
        new: true,
        runValidators: true
    })
        .then((movie) => {
            if (!movie) {
                return res.status(404).send('Film introuvable.');
            }

            console.log(movie);
            res.redirect(`/movies/read?movieId=${movie._id}`);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};
