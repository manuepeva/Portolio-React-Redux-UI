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
import { educationData } from "./utils";

// Styled component para el botón de expandir
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


const EducationCard = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleExpandClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
 <Box sx={{ my: { xs: 4, sm: 6, md: 8 }, mx: { xs: 2, sm: 3, md: 5 } }}>
      <Grid container spacing={2} justifyContent="center">
        {educationData.map((edu, index) => (
          <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: red[500] }}>{edu.avatar}</Avatar>}
                action={<IconButton aria-label="settings" />}
                title={edu.title}
                subheader={edu.subheader}
              />
              <CardMedia
                sx={{ height: 0, paddingTop: "95%" }}
                image={edu.image}
                title={edu.institution}
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
                <IconButton
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expandedIndex === index}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="h6" color="primary">
                    {edu.expandedTitle}
                  </Typography>
                  <Typography>Description:</Typography>
                  <Typography>{edu.expandedDescription}</Typography>
                  <Typography paragraph>
                    {edu.topics.map((topic, i) => (
                      <span key={i}>
                        - {topic} <br />
                      </span>
                    ))}
                  </Typography>
                  <Typography>{`Completed on ${edu.dateCompleted}`}</Typography>
                  <Link href={edu.link}>{edu.linkText}</Link>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EducationCard;
