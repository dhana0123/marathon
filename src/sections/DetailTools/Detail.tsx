import React from "react";
import { Box, Grid } from "@mui/material";
import ToolDetail from "./ToolDetail";

const Detail = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: "960px", margin: "auto" }}>
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
  );
};

export default Detail;
