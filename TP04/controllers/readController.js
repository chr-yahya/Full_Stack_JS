const Movie = require('../models/Movie');

module.exports.read = (req, res) => {
    const movieId = req.query.movieId;

    if (!movieId) {
        return res.status(400).send('movieId est requis.');
    }

    Movie.findById(movieId)
        .then((selected) => {
            if (!selected) {
                return res.status(404).send('Film introuvable.');
            }

            console.log(selected);
            res.render('pages/movies',{selected:selected});
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};
