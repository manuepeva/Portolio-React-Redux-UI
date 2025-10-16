import React, { useEffect, useState } from "react";
import { getGithubRepos } from "../../api/githubApi";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import { secrets } from "../../../secrets/secrets";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = "manuepeva";

    const fetchData = async () => {
      try {
        const repos = await getGithubRepos(username, secrets);
        setCards(repos);
      } catch (err) {
        // eslint-disable-next-line
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="proyect-container">
      {loading && <p className="loading-data">Loading Data from Github API...</p>}
      <Grid container spacing={4} justifyContent="center">
        {cards.map((repo) => (
          <Grid item xs={12} sm={6} md={4} key={repo.id}>
            <Card
              sx={{
                width: 300,
                height: { xs: 180, md: 250 },
                margin: 2,
                padding: { xs: 1, md: 3 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
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
                    {t("proyectsPage")}
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
