const Movie = require('../models/Movie');

const title = 'Interstellar';
const movieData ={
    synopsis:"une super histoire ..."
};

module.exports.update = (req, res) => {
    Movie.findOneAndUpdate({ title }, movieData, { returnDocument: 'after' })
    .then((movie) => {
        console.log(movie);
})
    .catch(err => console.error(err));
};
