import React, { useEffect, useState } from "react";
import {getGithubRepos} from '../../api/githubApi'
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
} from "@mui/material";
import { secrets } from "../../../secrets/secrets";

const Projects = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const username = "manuepeva";

    const fetchData = async () => {
      try {
        const repos = await getGithubRepos(username, secrets);
        setCards(repos);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-proj">
      {loading && <p className="loading-data">Loading Data from Github API...</p>}
      <Grid container spacing={3} justifyContent="center">
        {cards.map((repo) => (
          <Grid item xs={12} sm={6} md={4} key={repo.id}>
            <Card sx={{ width: 250, height: "auto", margin: 2 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {repo.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {repo.full_name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href={repo.clone_url} target="_blank" rel="noopener">
                    Go to Repository
                  </Link>
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
