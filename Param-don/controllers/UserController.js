const user = (req, res) => {
    res.render('pages/user',{id_value :req.params.id});
};

module.exports = { user };
