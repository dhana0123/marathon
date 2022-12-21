import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { tools } from "../../constants";

const Alltools = () => {
  return (
    <Grid container p={2}>
      {(tools || []).map((tool) => (
        <Grid item xs={12} sm={3}>
          <Typography sx={{ color: "primary" }} variant="subtitle1">
            {tool.title}
          </Typography>
          <Box>
            {(tool.list || []).map((link) => (
              <Typography>{link.title}</Typography>
            ))}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Alltools;
