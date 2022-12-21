import React from "react";
import { Box, Container } from "@mui/material";
import Subscription from "../sections/Subscription";
import TopNavbar from "../components/Nav/TopNavbar";

const Plans = () => {
  return (
    <Container>
      <Box mb={2}>
        <TopNavbar />
      </Box>
      <Box mb={2}>
        <Subscription />
      </Box>
    </Container>
  );
};

export default Plans;
