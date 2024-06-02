import mysql from 'mysql';

// Créer une connexion à la base de données
const db = mysql.createConnection({
  host: "db",
  user: process.env.REACT_APP_MYSQL_USER,
  password: process.env.REACT_APP_MYSQL_PASSWORD,
  database: process.env.REACT_APP_MYSQL_ROOT_PASSWORD
});

// Écouter l'événement de connexion réussie
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connexion à la base de données réussie');
});

// Écouter l'événement d'erreur de connexion
db.on('error', (err) => {
  console.error('Erreur de connexion à la base de données :', err);
});

export default db;
