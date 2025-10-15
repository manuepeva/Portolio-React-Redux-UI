import { Box, Modal } from "@mui/material";
import React from "react";

const EducationModal = ({
  handleCloseModal,
  modalImage,
  modalOpen,
  toggleZoom,
  zoom,
}) => {
  return (
    <>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-image"
        aria-describedby="modal-lightbox"
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
          <img
            src={modalImage}
            alt="Preview"
            onClick={toggleZoom}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              cursor: zoom ? "zoom-out" : "zoom-in",
              transform: zoom ? "scale(1.15)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default EducationModal;
