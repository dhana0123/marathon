import React from "react";
import { Divider, Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../sections/Footer";
import FAQS from "../sections/FAQS";
import ToolBanner from "../sections/ToolsBanner";
import Subscription from "../sections/Subscription";
const Landing = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        // backgroundColor: theme.palette.primary.main,
        height: "100vh",
        pt: 18,
      }}
    >
      <Container
        sx={{
          background: "white",
          position: "fixed",
          top: "10px",
          left: 0,
          right: 0,
          borderRadius: "1rem",
          boxShadow: theme.shadows[8],
          zIndex: 1000,
        }}
      >
        <TopNavbar />
      </Container>
      {/* ToolBanner */}
      <Box
        sx={{ backgroundColor: "#F2F8F9", margn: "auto" }}
        borderTop={(theme) => `3px dashed ${theme.palette.grey[300]}`}
      >
        <Container>
          <ToolBanner />
        </Container>
      </Box>
      {/* plans */}
      <Box
        sx={{ backgroundColor: "primary.lighter", py: 4, margn: "auto" }}
        borderTop={(theme) => `3px dashed ${theme.palette.grey[300]}`}
      >
        <Container>
          <Subscription />
        </Container>
      </Box>
      {/* faqs */}
      <Box
        sx={{
          pt: 3,
          pb: 10,
          backgroundColor: "secondary.lighter",
          margn: "auto",
        }}
      >
        <Container>
          <FAQS />
        </Container>
      </Box>
      {/* FOoter */}
      <Box sx={{ backgroundColor: "grey.800", color: "white", margn: "auto" }}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Landing;
