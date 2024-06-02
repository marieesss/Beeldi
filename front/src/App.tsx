import React from 'react';
import logo from './logo.svg';
import './App.css';
import db from './utils/database/mysql';
function App() {

  // Fonction pour récupérer tous les équipements depuis la base de données
function getAllEquipments() {
  return new Promise((resolve, reject) => {
    // Exécutez une requête SQL pour sélectionner tous les équipements
    db.query('SELECT * FROM equipments', (error, results) => {
      if (error) {
        reject(error); // Rejeter en cas d'erreur
      } else {
        resolve(results); // Résoudre avec les résultats récupérés depuis la base de données
      }
    });
  });
}

// Utilisation de la fonction pour récupérer tous les équipements
getAllEquipments()
  .then((equipments) => {
    // Traitez les équipements récupérés ici
    console.log('Equipments:', equipments);
  })
  .catch((error) => {
    // Gérez les erreurs ici
    console.error('Error fetching equipments:', error);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
