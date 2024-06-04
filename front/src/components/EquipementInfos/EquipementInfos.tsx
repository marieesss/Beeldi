import React from "react";
import { Equipment } from "../../types/Equipements";

const EquipementInfos = ({ data }: { data: Equipment }) => {
  return (
    <div>
      <h2>Informations générales</h2>
      <ul>
        <li key={data.name}>Nom équipement : {data.name}</li>
        <li key={data.building}>Batîment : {data.building}</li>
        <li key={"localisation"}>
          Localisation : {data.local} / {data.niveau}
        </li>
        <li key={data.quantity}>Quantité : {data.quantity}</li>
      </ul>
      <h2>Caractériques de l'équipement</h2>
      <ul>
        <li key={data.model}>Model : {data.model}</li>
        <li key={data.domain}>Domain : {data.domain}</li>
        <li key={"serial Number"}>
          Numéro de série :{" "}
          {data.serialNumber ? data.serialNumber : "non referencé"}
        </li>
        <li key={"notes"}>
          Notes : {data.notes ? data.notes : "non referencé"}
        </li>
      </ul>
    </div>
  );
};

export default EquipementInfos;
