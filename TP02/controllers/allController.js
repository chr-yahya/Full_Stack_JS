const jokesList = require('../data/jokes.json');

const home = (req, res) => {
    res.render('pages/all', { jokesList });
};

module.exports = { home };
