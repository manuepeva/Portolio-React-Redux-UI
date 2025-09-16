import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import { red } from "@mui/material/colors";
import imageCusco from "../../../utils/img/cusco.png";
import imagePeru from "../../../utils/img/peru.png";
import imageLima from "../../../utils/img/Lima-Peru.jpg";

// Datos de las ubicaciones
const locations = [
  {
    avatar: "C",
    title: "Cusco",
    image: imageCusco,
    description:
      "The city of Cusco was founded by the Spaniards on March 23, 1534, being also the most important place for the Inca Empire. It is located at 3,339 m.a.s.l",
  },
   {
    avatar: "L",
    title: "Lima",
    image: imageLima,
    description:
      "Lima is the capital of Peru and is located in the central coastal part of the country, overlooking the Pacific Ocean. It is the largest city in Peru and one of the largest in South America.",
  },
  {
    avatar: "P",
    title: "Perú",
    image: imagePeru,
    description:
      "Perú is located on the west coast of the Pacific Ocean, in South America. It was the center of the biggest empire that ruled this part of the Earth, the Inca Empire, covering approximately 800,000 sq Km.",
  },
];

const LocationPage = () => {
  return (
    <div className="ubication-container">
      <Grid container spacing={3} justifyContent="center">
        {locations.map((loc, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: red[500] }}>{loc.avatar}</Avatar>}
                title={loc.title}
              />
              <CardMedia
                component="img"
                height="194"
                image={loc.image}
                alt={loc.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {loc.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LocationPage;
