import React from "react";
import { Equipment } from "../../types/Equipements";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./CardContainer.css"

const CardContainer = ({ data }: { data: Equipment[] }) => {
  return (
    <Grid container spacing={3}>
      {data.map((value: Equipment) => (
        <Grid item key={value.id} xs={12} sm={6} md={4} lg={3}>
          <Link to={`/${value.id}`}>
          <Card sx={{ maxWidth: 345 }} id={`equipment-${value.id}`} className="card">
            <CardMedia
              component="img"
              height="194"
              image={value.photo}
              alt={`Equipment image ${value.name}`}
            />
            <CardContent>
            <ul data-testid={`list-${value.id}`}>
              <li>Nombre de défaut : {value.nbFaults}</li>
              <li>Nom : {value.name}</li>
              <li>Domaine : {value.domain}</li>
              </ul>
            </CardContent>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardContainer;
