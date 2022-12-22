import React from "react";
import { Box, Grid, Container } from "@mui/material";
import ToolDetail from "./ToolDetail";

const Detail = () => {
  return (
    <Container>
      <Box p={3} px={4} sx={{ minHeight: "100vh" }}>
        <Grid container spacing={2}>
          <Grid xs={4} item>
            <ToolDetail />
          </Grid>
          <Grid xs={4} item>
            <ToolDetail />
          </Grid>
          <Grid xs={4} item>
            <ToolDetail />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Detail;
