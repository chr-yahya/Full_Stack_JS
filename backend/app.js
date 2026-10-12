const express = require('express');
const app = express();
const path = require('path');
//app.use((req,res,next)=>{
//    const now =new Date().toDateString();
//    console.log(`${now} : une requête ${req.method} est arrivée !`);
//    next();
//});
//app.use((req, res, next) => {
//    res.statusCode =200;
//    res.setHeader('Content-Type','text/html;charset=utf-8');
//    next();
//});
//app.use((req,res)=>{
//    res.sendFile(path.join(__dirname,'/public/pages/index.html'));
//});
app.use(express.static(path.join(__dirname,'public')));
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
app.use((req, res) => {
    res.render('pages/home',{user:{nickname:"yahya",sex:"F"}});
});
module.exports = app;