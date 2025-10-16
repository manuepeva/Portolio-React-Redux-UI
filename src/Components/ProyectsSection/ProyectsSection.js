import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Link,
} from "@mui/material";

const ProyectsSection = ({ proyects }) => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 7 } }}>
      <Grid container spacing={8} justifyContent="center">
        {proyects.map((proj, idx) => (
          <Grid item xs={12} sm={6} md={6} key={idx}>
            <Card
              sx={{
                maxWidth: { xs: "100%", sm: 300, md: 400, lg: 500 },
                margin: "auto",
                boxShadow: 2,
                borderRadius: 2,
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <Link href={proj.link} target="_blank" underline="none">
                <CardMedia
                  component="img"
                  image={proj.image}
                  alt={proj.title}
                  sx={{
                    height: { xs: 180, sm: 200, md: 220 },
                    objectFit: "cover",
                  }}
                />
              </Link>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {proj.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {proj.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProyectsSection;
