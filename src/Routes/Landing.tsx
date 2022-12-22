import React from "react";
import { Divider, Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TopNavbar from "../components/Nav/TopNavbar";

const Landing = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main, height: "100vh" }}>
      <Container
        sx={{
          background: "white",
          position: "fixed",
          top: "10px",
          left: 0,
          right: 0,
          borderRadius: "1rem",
          boxShadow: theme.shadows[8],
        }}
      >
        <TopNavbar />
      </Container>
    </Box>
  );
};

export default Landing;
