const form = (req, res) => {
    let data =req.body;
    res.render('pages/show_post_data',{data});
};

module.exports = { form };
