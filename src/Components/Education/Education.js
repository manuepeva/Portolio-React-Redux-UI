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
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import clsx from "clsx";
import img1 from "../../img/FreeCodeCampCertificate.png";
import img2 from "../../img/teamtreehouse.png";
import img3 from "../../img/andina.png";
import img4 from "../../img/udemy.png";
import img5 from "../../img/toefl.png";
import img6 from "../../img/acupari.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 0,
    paddingTop: "95%", // 16:9
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
  media92: {
    paddingTop: 97,
  },
}));

const Education = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="">
      <Grid container>
        <Grid item xs={12} lg={4} xl={6} sm={4}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="education" className={classes.avatar}>
                  F
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title="Frontend Developer"
              subheader="August 23, 2017"
            />
            <CardMedia
              className={classes.media}
              image={img1}
              title="FreeCode Camp University"
            />
            <CardContent>
              <Typography variant="body2" color="textPrimary" component="h2">
                Free Code Camp University
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Frontend Developer Certification - 400 hours. JavaScript -
                Algorithms - Libraries - CSS - HTML API - Github
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
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="h6" color="primary">
                  Online Frontend Developer Certification
                </Typography>
                <Typography>Description:</Typography>
                <Typography>Free Code Camp University</Typography>
                <Typography paragraph>
                  This is a nonprofit organization (United States Federal ID:
                  820779546), that offers free online development courses.
                  <br />
                  Topics:
                </Typography>
                - Responsive Web Design <br />
                - JavaScript Algorithms & Data Structures
                <br />
                - Front End Libraries
                <br />
                - API´s and microservices
                <br />
                <Typography>Completed on August 23, 2017</Typography>
                <Link href="https://www.freecodecamp.org/certification/manuepeva/legacy-front-end">
                  Certificate
                </Link>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4} xl={6} sm={4}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="education" className={classes.avatar}>
                  F
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title="Frontend Course"
              subheader="December 25, 2018"
            />
            <CardMedia
              className={classes.media}
              image={img2}
              title="Team Treehouse"
            />
            <CardContent>
              <Typography variant="body2" color="textPrimary" component="h2">
                TeamTreeHouse
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Online Frontend Developer course. HTML - JavaScript - CSS -
                Unity - Java - SQL - API - PhP
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="h6" color="primary">
                  Front End Development Course
                </Typography>
                <Typography>Description:</Typography>
                <Typography>Team Treehouse</Typography>
                <Typography paragraph>
                  Team Tree House is a organization that offers paid developer
                  courses.
                  <br />
                  Topics:
                </Typography>
                - Responsive Web Design <br />
                - JavaScript Algorithms & Data Structures
                <br />
                - Front End Libraries
                <br />
                - API´s and microservices
                <br />
                - Unity
                <br />- SQL
                <Typography paragraph></Typography>
                <Typography>Completed on December 25, 2018</Typography>
                <Link href="https://teamtreehouse.com/">Website</Link>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4} xl={6} sm={4}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="education" className={classes.avatar}>
                  F
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title="Frontend Course"
              subheader="November 24, 2020"
            />
            <CardMedia className={classes.media} image={img4} title="Udemy" />
            <CardContent>
              <Typography variant="body2" color="textPrimary" component="h2">
                Udemy
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Online Frontend React course. Hooks, ES6, Firebase, NextJS, API,
                GatsbyJS, GraphQl, localStorage, Heroku, Netlify, Git, Visual
                Studio Code
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="h6" color="primary">
                  Front End React Development Course
                </Typography>
                <Typography>Description:</Typography>
                <Typography>Udemy</Typography>
                <Typography paragraph>
                  Udemy.com offers paid developer courses.
                  <br />
                  Topics:
                </Typography>
                - ReactJS - React Hooks
                <br />
                - API management and configuration inside React
                <br />
                - React frameworks such as GatsbyJS and NextJS
                <br />
                - Deployment to Netlify (frontend) and Heroku (backend)
                <br />
                - Configuration and usage of browser Devtools.
                <br />- Redux - Redux-Hooks - Store
                <Typography paragraph></Typography>
                <Typography>Completed on November 24, 2020</Typography>
                <Link href="https://www.udemy.com/">Website</Link>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4} xl={6} sm={4}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="education" className={classes.avatar}>
                  B
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title="Business Administration"
              subheader="June 30, 2012"
            />
            <CardMedia
              className={classes.media}
              image={img3}
              title="Business Management"
            />
            <CardContent>
              <Typography variant="body2" color="textPrimary" component="h2">
                Universidad Andina del Cusco
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Business Management University Degree, four years long and
                graduated with Thesis. Member of diverse study groups.
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
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="h6" color="primary">
                  Business Administration Degree
                </Typography>
                <Typography>Description:</Typography>
                <Typography>Universidad Andina del Cusco</Typography>
                <Typography paragraph>
                  The Universidad Andina del Cusco is one of the biggest
                  universities in the city of Cusco, and currently offers more
                  than fifteen careers.
                  <br />
                  Topics:
                </Typography>
                <Typography paragraph>
                  - Business Management
                  <br />
                  - Organization
                  <br />
                  - Planification
                  <br />
                  - Human Resourses
                  <br />
                  - Operations
                  <br />- Finances
                </Typography>
                <Typography>Concluded on June 30, 2012</Typography>
                <Link href="http://repositorio.uandina.edu.pe/browse?type=author&value=P%C3%A9rez+Vallenas%2C+Manuel">
                  University Repository
                </Link>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4} xl={6} sm={4}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="education" className={classes.avatar}>
                  T
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title="TOEFL"
              subheader="October 12, 2019"
            />
            <CardMedia
              className={classes.media}
              image={img5}
              title="English Exam"
            />
            <CardContent>
              <Typography variant="body2" color="textPrimary" component="h2">
                Test of English as a Foreign Language
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                International English Exam, taken on October 12, 2019. Score 87
                C-1
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="h6" color="primary">
                  TOEFL
                </Typography>
                <Typography>Description:</Typography>
                <Typography>
                  Instituto Cultural Peruano Norteamericano (ICPNA-CUSCO)
                </Typography>
                <Typography paragraph>
                  The american peruvian cultural Institut is the recognized and
                  authorized place in order to take english international exams
                  in the city of Cusco.
                  <br />
                  Topics:
                </Typography>
                <Typography paragraph>
                  - English
                  <br />
                </Typography>
                <Typography>Taken on October 12, 2019</Typography>
                <Link href="https://www.ets.org/">Website</Link>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4} xl={6} sm={4}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="education" className={classes.avatar}>
                  G
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title="German Language"
              subheader="Ongoing"
            />
            <CardMedia
              className={classes.media}
              image={img6}
              title="German Language"
            />
            <CardContent>
              <Typography variant="body2" color="textPrimary" component="h2">
                ACUPARI - German Peruvian Institut
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Ongoing german language studies, currently on level A - 3
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
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="h6" color="primary">
                  German Language
                </Typography>
                <Typography>Description:</Typography>
                <Typography>Universidad Andina del Cusco</Typography>
                <Typography paragraph>
                  ACUPARI is the most important place where to learn german in
                  Cusco. <br />
                  Topics:
                </Typography>
                <Typography paragraph>
                  - German
                  <br />
                </Typography>
                <Typography>Ongoing studies</Typography>
                <Link href="https://www.acupari.pe/">Website</Link>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Education;
