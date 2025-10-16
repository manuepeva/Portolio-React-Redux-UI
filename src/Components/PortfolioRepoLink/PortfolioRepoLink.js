import React from "react";
import { Button, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";

const GitRepoLink = () => {
  const { t } = useTranslation();
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2, md: 3, xl: 5 },
          margin: { xs: 3, md: 5 },
        }}
      >
        <h3 style={{ fontSize: "1.2rem", marginBottom: "12px" }}>
          {t("portfolioRepoLink.title")}
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
          {t("portfolioRepoLink.goTo")}
        </Button>
      </Box>
    </Box>
  );
};

export default GitRepoLink;
