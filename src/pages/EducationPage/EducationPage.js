import React from "react";
import {
  Card,
  CardHeader,
  Collapse,
  Avatar,
  IconButton,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Link,
  Box,
} from "@mui/material";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { styled } from "@mui/material/styles";
import EducationModal from "./EducationModal";
import { useTranslation } from "react-i18next";

// Styled component para el botón de expandir
const ExpandMore = styled((props) => {
  // eslint-disable-next-line
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const EducationPage = ({ educationData }) => {
  console.log(educationData, "education data");
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState("");
  const [zoom, setZoom] = React.useState(false);

  const handleExpandClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
    e.stopPropagation(); // evita que el click cierre el modal
    setZoom((prev) => !prev);
  };

  return (
    <Box sx={{ my: { xs: 4, sm: 6, md: 8 }, mx: { xs: 2, sm: 3, md: 5 } }}>
      <Grid container spacing={2} justifyContent="center">
        {educationData.map((edu, index) => (
          <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }}>{edu.avatar}</Avatar>
                }
                title={edu.title}
                subheader={edu.subheader}
              />
              <CardMedia
                sx={{
                  height: 0,
                  paddingTop: "95%",
                  cursor: "pointer",
                  "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
                }}
                image={edu.image}
                title={edu.institution}
                onClick={() => handleOpenModal(edu.image)}
              />
              <CardContent>
                <Typography variant="body2" color="text.primary">
                  {edu.institution}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expandedIndex === index}
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expandedIndex === index}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse
                in={expandedIndex === index}
                timeout="auto"
                unmountOnExit
              >
                <CardContent>
                  <Typography variant="h6" color="primary">
                    {edu.expandedTitle}
                  </Typography>
                  <Typography>
                    {t("educationPage.frontendExpandedDescriptionLabel")}
                  </Typography>
                  <Typography>{edu.expandedDescription}</Typography>
                  <Typography paragraph>
                    {edu.topics.map((topic, i) => (
                      <span key={i}>
                        - {topic} <br />
                      </span>
                    ))}
                  </Typography>
                  <Typography>{`${t("educationPage.frontendExpandedDateCompletedLabel")}: ${edu.dateCompleted}`}</Typography>
                  <Link href={edu.link}>
                    {t("educationPage.frontendExpandedLinkText")}
                  </Link>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>

      <EducationModal
        handleCloseModal={handleCloseModal}
        modalImage={modalImage}
        modalOpen={modalOpen}
        toggleZoom={toggleZoom}
        zoom={zoom}
      />
    </Box>
  );
};

export default EducationPage;
