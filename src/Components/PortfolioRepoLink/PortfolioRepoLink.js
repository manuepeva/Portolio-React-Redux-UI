import React from "react";
import { Button, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const GitRepoLink = () => {
  return (
    <Box
      className="gitrepo"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box  sx={{
          my: { xs: "5vh", sm: "7vh", md: "12vh" }, 
        }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "12px" }}>
          Link to the Portfolio's GitHub Repository
        </h3>
        <Button
          variant="contained"
          href="https://github.com/manuepeva"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon />}
          sx={{
            width: { xs: "100%", sm: "auto" },
            fontSize: { xs: "0.9rem", sm: "1rem" },
            padding: { xs: "10px 0", sm: "10px 20px" },
            backgroundColor: "#0e346d",
            color: "#ffffff",
            borderRadius: "4vh",
          }}
        >
          Go to GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default GitRepoLink;
