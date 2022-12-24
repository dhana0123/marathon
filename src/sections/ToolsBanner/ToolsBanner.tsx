import React from "react";
import { Box, Grid, Container, Tabs, Tab, Typography } from "@mui/material";
import ToolCard from "./ToolCard";

const ToolBanner = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: "960px", margin: "auto", py: 10 }}>
      <Typography textAlign={"center"} sx={{ color: "grey.800" }} variant="h2">
        90+ Tools For You
      </Typography>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            py: 2,
            pt: { xs: 1, sm: 3 },
            maxWidth: "960px",
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
        <Grid container pt={4} spacing={2}>
          {[1, 2, 3, 4, 5, 6, 9].map((tool) => (
            <Grid key={tool} xs={12} sm={4} item>
              <ToolCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ToolBanner;
