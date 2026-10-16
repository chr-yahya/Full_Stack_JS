const express = require('express');
const app = express();
const path = require('path');
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/UserRouter');
const paramsRouter = require('./routes/paramsRouter');
const formRouter = require('./routes/formRouter');
const formulaireRouter = require('./routes/formulaireRouter');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req,res,next)=>{
    const now = new Date().toDateString();
    console.log(`${now} : une requête ${req.method} est arrivée !`);
    next();
});
app.set('view engine', 'ejs'); // Définition du moteur de rendu 
app.set('views', path.join(__dirname, 'views')); // Déclaration du dossier contenant les vues
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', '../views/layouts/layout'); // Définition du layout par défaut


app.use("/", homeRouter);
app.use("/user", userRouter);
app.use('/params', paramsRouter);
app.use('/form', formRouter);
app.use('/formulaire', formulaireRouter);
app.get('/*path', (req, res) => { 
    res.redirect('/')
});
 
module.exports = app;
