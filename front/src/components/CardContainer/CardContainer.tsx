import React from "react";
import { Equipment } from "../../types/Equipements";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";

const CardContainer = ({ data }: { data: Equipment[] }) => {
  return (
    <Grid container spacing={3}>
      {data.map((value: Equipment) => (
        <Grid item key={value.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image={value.photo}
              alt="Equipment image"
            />
            <CardContent>
              <li>Nombre de défaut : {value.nbFaults}</li>
              <li>Nom : {value.name}</li>
              <li>Domaine : {value.domain}</li>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardContainer;
