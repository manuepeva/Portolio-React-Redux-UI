import React, { useEffect, useState } from "react";
import axios from "axios";
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

const Projects = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = "manuepeva";
    const token = "68211527d2c119adcf22fef7296363273de4ca5d"; // OJO: evita poner tokens en el front
    const headers = {
      Authorization: `Basic ${btoa(`${username}:${token}`)}`,
    };

    const getGithubInfo = async () => {
      try {
        const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=asc`;
        const response = await axios.get(url, { headers });
        setCards(response.data);
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
      } finally {
        setLoading(false);
      }
    };

    getGithubInfo();
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
