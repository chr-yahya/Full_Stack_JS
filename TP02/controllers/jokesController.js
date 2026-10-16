const jokesList = require('../data/jokes.json');

const jokes = (req, res) => {
    let jokeId = req.body.jokeId;
    const joke = jokesList.find((item) => item.id === jokeId);

    res.render('pages/jokes', { joke });
};

module.exports = { jokes };
