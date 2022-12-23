import React from "react";
import { Box, Grid, Container, Tabs, Tab } from "@mui/material";
import ToolDetail from "./ToolDetail";

const Detail = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: "960px", margin: "auto" }}>
      <Box sx={{ minHeight: "100vh", position: "relative" }}>
        <Box
          sx={{
            py: 2,
            pb: 3,
            position: "fixed",
            top: "85px",
            maxWidth: "960px",
            backgroundColor: "#F2F8F9",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Product" />
            <Tab label="Blog" />
            <Tab label="Social Media" />
            <Tab label="Brain Stromming" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </Box>
        <Grid container pt={11} spacing={2}>
          <Grid xs={12} sm={4} item>
            <ToolDetail />
          </Grid>
          <Grid xs={12} sm={4} item>
            <ToolDetail />
          </Grid>
          <Grid xs={12} sm={4} item>
            <ToolDetail />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Detail;
