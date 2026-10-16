const user_params = (req, res) => {
    let query = req.query;
    res.render('pages/user_params',{query});
};

module.exports = { user_params };
