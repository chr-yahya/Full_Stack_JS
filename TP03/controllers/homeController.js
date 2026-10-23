const home = (req, res) => {
    const { username = '', password = '' } = req.body || {};

    let valid = false;
    let user = null;
    let error = null;

    if (!username) {
        error = 'username is empty';
    } else if (!password) {
        error = 'password is empty';
    } else if (username === 'stark' && password === 'warmachinerox') {
        valid = true;
        user = 'tony';
    } else {
        error = 'authentication failed';
    }

    res.render('pages/home', { user, valid, error });
};

module.exports = { home };
