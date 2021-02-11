import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import img1 from "../../img/cusco.png";
import img2 from "../../img/peru.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 20,
    marginLeft: "20%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Ubication = () => {
  const classes = useStyles();

  return (
    <div className="ubication-container">
      <Grid container>
        <Grid item xs={12} lg={4} xl={6} sm={6}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="location" className={classes.avatar}>
                  C
                </Avatar>
              }
              title="Cusco"
            />
            <CardMedia className={classes.media} image={img1} title="Cusco" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                The city of Cusco was founded by the spaniards on March 23,
                1534, being also the most important place for the Incas Empire.
                It is located at 3,339 m.a.s.l
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4} xl={6} sm={6}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="location" className={classes.avatar}>
                  P
                </Avatar>
              }
              title="Perú"
            />
            <CardMedia className={classes.media} image={img2} title="Perú" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Perú is located on the west cost of the pacific ocean, in South
                América. It was the center of the biggest empire that ruled this
                part of the Earth, the Incas Empire, covering approximately
                800,000 sq Km.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Ubication;
