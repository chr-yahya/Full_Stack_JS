const Movie = require('../models/Movie');

module.exports.create = (req, res) => {
    const body = req.body || {};
    const movieData = {
        title: body.title,
        synopsis: body.synopsis
    };

    if (req.file) {
        movieData.image = `/data/uploads/${req.file.filename}`;
    }

    if (!movieData.title) {
        return res.status(400).send('Le titre est requis.');
    }

    Movie.create(movieData)
    .then((movie) => {
        console.log('Movie created:', movie);
        res.redirect(`/movies/read?movieId=${movie._id}`);
    })
    .catch(err => {
        res.status(400).send(err);
    })
}
