const jokesList = require('../data/jokes.json');

const random = (req, res) => {
    const index = Math.floor(Math.random() * jokesList.length);
    const joke = jokesList[index];

    res.render('pages/random', { joke });
};

module.exports = { random };
