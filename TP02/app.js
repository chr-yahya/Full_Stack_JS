const express = require('express');
const app = express();
const path = require('path');
const allRouter = require('./routes/allRouter');
const randomRouter = require('./routes/randomRouter');
const jokesRouter = require('./routes/jokesRouter');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: false }));
app.use((req,res,next)=>{
    const now = new Date().toDateString();
    console.log(`${now} : une requête ${req.method} est arrivée !`);
    next();
});
app.set('view engine', 'ejs'); // Définition du moteur de rendu 
app.set('views', path.join(__dirname, 'views'));
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', '../views/layouts/layout'); 
app.use('/', allRouter);
app.use('/random', randomRouter);
app.use('/jokes', jokesRouter);

app.get('/*path', (req, res) => { 
    res.redirect('/')
});
 
module.exports = app;
