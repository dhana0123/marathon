import React from "react";
import { Typography, Box, Stack, Tabs, Tab } from "@mui/material";

const ProjectCreateTopBar = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
        <Tabs
          sx={{ mt: -4 }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab sx={{ fontSize: "0.85rem" }} label="Create" />
          <Tab sx={{ fontSize: "0.85rem" }} label="Saved" />
        </Tabs>
      </Box>
    </Stack>
  );
};

export default ProjectCreateTopBar;
