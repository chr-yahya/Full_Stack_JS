const teaching = (req, res) => {
    res.render('pages/teaching');
};

const node = (req, res) => {
    res.render('pages/node');
};

const expressPage = (req, res) => {
    res.render('pages/express');
};

const php = (req, res) => {
    res.render('pages/php');
};

module.exports = {
    teaching,
    node,
    expressPage,
    php
};
