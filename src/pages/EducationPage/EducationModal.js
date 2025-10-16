import { Box, Modal } from "@mui/material";
import PropTypes from "prop-types";
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
              alt="Preview"
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
    </>
  );
};

EducationModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  toggleZoom: PropTypes.func.isRequired,
  zoom: PropTypes.bool.isRequired,
};

export default EducationModal;
