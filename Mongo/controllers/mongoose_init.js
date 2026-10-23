const mongoose = require('mongoose');

const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const dbName = process.env.MONGO_DBNAME;
const uri = `mongodb://${host}:${port}/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
