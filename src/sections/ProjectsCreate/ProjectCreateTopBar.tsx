import React from "react";
import { Typography, Box, Stack, Button } from "@mui/material";

const ProjectCreateTopBar = () => {
  return (
    <Stack
      py={1}
      direction={"row"}
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="h5" color="grey.700">
        My Project Name
      </Typography>
      <Box>
        <Button variant="text">Create</Button>
        <Button variant="text">Saved</Button>
      </Box>
    </Stack>
  );
};

export default ProjectCreateTopBar;
