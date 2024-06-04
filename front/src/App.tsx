import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EquipmentPage from "./screens/Equipement/Equipment";
import Header from "./components/Header/Header";
import EquipementDetails from "./screens/EquipementDetails/EquipementDetails";

function App() {
  return (
    <> 
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<EquipmentPage />} />
          <Route path="/:id" element={<EquipementDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
