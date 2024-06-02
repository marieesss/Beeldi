import React from 'react';
import logo from './logo.svg';
import './App.css';
import { database } from './data/firebase/firebase';
function App() {

  const equipmentsRef = database.ref('Equipments'); 
  console.log(equipmentsRef)

    // Récupérer toutes les données une seule fois
equipmentsRef.once('value', (snapshot) => {
  // La fonction de rappel sera appelée une fois que toutes les données seront récupérées
  const data = snapshot.val();
  console.log(data);
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
