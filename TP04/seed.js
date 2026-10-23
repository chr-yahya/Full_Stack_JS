const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Movie = require('./models/Movie');

require('dotenv').config({ path: './.env' });

const host = process.env.MONGO_HOST || 'localhost';
const port = process.env.MONGO_PORT || 27017;
const dbName = process.env.MONGO_DBNAME || 'movies_db';
const uri = `mongodb://${host}:${port}/${dbName}`;

// Recherche du fichier movies.json
let jsonPath = path.resolve(__dirname, '../../movies.json');
if (!fs.existsSync(jsonPath)) {
  jsonPath = path.resolve(__dirname, '../movies.json');
}
if (!fs.existsSync(jsonPath)) {
  jsonPath = path.resolve(__dirname, 'movies.json');
}

const rawData = fs.readFileSync(jsonPath, 'utf-8');
const moviesList = JSON.parse(rawData).map(m => ({
  title: m.title,
  synopsis: m.synopsis,
  image: m.image
}));

async function seedDatabase() {
  try {
    console.log(`Connexion à MongoDB sur : ${uri}...`);
    await mongoose.connect(uri);
    console.log('Connexion à MongoDB réussie !');

    // Réinitialisation de la collection
    await Movie.deleteMany({});
    console.log('Collection "movies" réinitialisée.');

    // Insertion des films provenant de movies.json
    const insertedMovies = await Movie.create(moviesList);
    console.log(`\nSuccès : ${insertedMovies.length} films insérés dans la base "${dbName}" :\n`);

    insertedMovies.forEach((m, idx) => {
      console.log(`${idx + 1}. Titre   : ${m.title}`);
      console.log(`   Image   : ${m.image}`);
      console.log(`   Synopsis: ${m.synopsis ? m.synopsis.substring(0, 80) : ''}...`);
      console.log(`   ID      : ${m._id}\n`);
    });

  } catch (error) {
    console.error('Erreur lors du peuplement de la base :', error);
  } finally {
    await mongoose.disconnect();
    console.log('Déconnexion de MongoDB effectuée.');
  }
}

seedDatabase();
