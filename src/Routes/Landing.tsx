import React from "react";
import { Divider, Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../sections/Footer";
import FAQS from "../sections/FAQS";
import ToolBanner from "../sections/ToolsBanner";
import Subscription from "../sections/Subscription";
import Steps from "../sections/Steps";
import Banner from "../sections/Banner";
const Landing = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "#F2F8F9",
        height: "100vh",
        pt: 15,
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
      {/* banner */}
      <Box sx={{ backgroundColor: "#F2F8F9", margn: "auto", pb: 6 }}>
        <Box maxWidth={"1500px"} margin="auto">
          <Banner />
        </Box>
      </Box>
      {/* steps */}
      <Box sx={{ backgroundColor: "#F2F8F9", margn: "auto" }}>
        <Container>
          <Steps />
        </Container>
      </Box>
      {/* ToolBanner */}
      <Box sx={{ backgroundColor: "#F2F8F9", margn: "auto" }}>
        <Container>
          <ToolBanner />
        </Container>
      </Box>
      {/* plans */}
      <Box sx={{ backgroundColor: "#F2F8F9", py: 4, margn: "auto" }}>
        <Container>
          <Subscription />
        </Container>
      </Box>
      {/* faqs */}
      <Box
        sx={{
          pt: 3,
          pb: 10,
          backgroundColor: "#F2F8F9",
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
