import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Modal,
} from "@mui/material";
import { red } from "@mui/material/colors";

const LocationPage = ({ locations }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState("");
  const [zoom, setZoom] = React.useState(false);

  const handleOpenModal = (imageUrl) => {
    setModalImage(imageUrl);
    setZoom(false);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalImage("");
    setZoom(false);
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    setZoom((prev) => !prev);
  };

  return (
    <Box sx={{ my: { xs: 4, sm: 6, md: 8 }, mx: { xs: 2, sm: 3, md: 5 } }}>
      <Grid container spacing={3} justifyContent="center">
        {locations.map((loc, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }}>{loc.avatar}</Avatar>
                }
                title={loc.title}
              />
              <CardMedia
                component="img"
                height="194"
                image={loc.image}
                alt={loc.title}
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
                onClick={() => handleOpenModal(loc.image)}
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

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="location-modal"
        aria-describedby="location-image-lightbox"
        closeAfterTransition
        BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.85)" } }}
      >
        <Box
          onClick={handleCloseModal}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            boxSizing: "border-box",
          }}
        >
          <button
            onClick={toggleZoom}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: zoom ? "zoom-out" : "zoom-in",
            }}
          >
            <img
              src={modalImage}
              alt="Location"
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                transform: zoom ? "scale(1.15)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>
        </Box>
      </Modal>
    </Box>
  );
};

export default LocationPage;
