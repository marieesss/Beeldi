import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EquipmentPage from './screens/EquipementPage/EquipmentPage';
import Header from './components/Header';

function App() {

  return (
    <>
    <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<EquipmentPage />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
