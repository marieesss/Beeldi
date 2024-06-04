import { render, screen } from '@testing-library/react'
import CardContainer from './CardContainer';
import { Equipment } from '../../types/Equipements';
import { MemoryRouter } from 'react-router-dom';

import {act} from 'react';


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
      status: "Actif",
      notes: "Notes sur l'équipement 1",
      nbFaults: 0,
    },
    {
      id: "2",
      name: "Équipement 2",
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

describe("CardContainer", () => {
    
    it("renders card container with equipment data", () => {
      const { getByAltText, container } = render(
        <MemoryRouter>
          <CardContainer data={mockData} />
      </MemoryRouter>);
        const CardOne = screen.getByTestId(`list-1`)
        const CardTwo = screen.getByTestId(`list-2`)
        const CardImages = container.querySelectorAll('img') 
        expect(CardImages.length).toEqual(2)
        expect(CardImages[0].src).toEqual("http://test.com/")
        expect(getByAltText("Equipment image Équipement 1")).toBeInTheDocument();
        expect(CardOne).toBeInTheDocument();
        expect(CardTwo).toBeInTheDocument();
        
    
    });
  
  
  });