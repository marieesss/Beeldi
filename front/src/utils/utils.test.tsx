import { render, screen } from '@testing-library/react'
import { Equipment } from '../types/Equipements';
import { filterData, reorderList } from './utils';
import { Categories } from '../types/redux/FilterSlice';

const mockData: Equipment[] = [
    {
      id: "1",
      name: "Équipement 1",
      building: "Bâtiment A",
      domain: "Domaine 1",
      niveau: "Niveau 1",
      local: "Local 1",
      photo: "http://test.com/",
      brand: "Marque 1",
      model: "Modèle 1",
      serialNumber: "123456789",
      quantity: 1,
      status: "En marche",
      notes: "Notes sur l'équipement 1",
      nbFaults: 0,
    },
    {
      id: "2",
      name: "Aquipement 2",
      building: "Bâtiment B",
      domain: "Domaine 2",
      niveau: "Niveau 2",
      local: "Local 2",
      photo: "http://test.com/",
      brand: "Marque 2",
      model: "Modèle 2",
      serialNumber: "987654321",
      quantity: 2,
      status: "Inactif",
      notes: "Notes sur l'équipement 2",
      nbFaults: 1,
    },
  ];

  const search = "Domaine"
  const categories : Categories[] =[{keyFilter : "status", value :"Inactif"}, {keyFilter : "brand", value :"Marque 2"}]

describe("Utils", () => {
    
    it("should reorder the list", () => {
        const newListe  = reorderList(mockData);
        expect(newListe[0].name).toEqual("Aquipement 2")
    });

    it("should filter the list", () => {
        const newListe  = filterData(mockData, categories, search);
        expect(newListe.length).toEqual(1)
    });
  
  
  
  });