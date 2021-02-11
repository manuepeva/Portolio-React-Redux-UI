import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";
import Test from './Test'

const useStyles = makeStyles({
  root: {
    Width: 250,
    Height: 250,
    margin: 30,
    marginTop: 30,
  },
});

const Projects = () => {
  const classes = useStyles();
  const [cards, setCards] = useState({});
  const [error, setError] = useState(true);
  useEffect(() => {
    let pass = "68211527d2c119adcf22fef7296363273de4ca5d";
    let username = "manuepeva";
    let headers = {
      Authorization: `Basic ${btoa(`${username}:${pass}`)}`,
    };
    const getGithubInfo = async () => {
      const url =
        "https://api.github.com/users/manuepeva/repos?per_page=100&order=asc?q=user:manuepeva?type=private";
      const getInfo = await axios(url, {
        method: "GET",
        headers: headers,
      });
      setCards(getInfo.data);
      setError(false);
    };
    getGithubInfo();
  }, []);
  const toArray = Object.entries(cards);
  return (
    <div className="container-proj">
      {error ? (
        <p className="loading-data">Loading Data from Github API...</p>
      ) : null}
      <Grid container className={classes.rootGrid}>
        {toArray.map((card) => (
          <Grid
            item
            xs={12}
            lg={4}
            xl={6}
            sm={4}
            className={classes.gridItem}
            key={card[1].id}
          >
            <Card className={classes.root}>
               <CardActionArea>
                 <Test />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card[1].name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {card[1].full_name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href={card[1].clone_url}>Go to Repository</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
