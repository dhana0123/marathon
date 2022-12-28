import React from "react";
import { Typography, Box, Stack, Tabs, Tab, TextField } from "@mui/material";

const ProjectCreateTopBar = () => {
  const [value, setValue] = React.useState(0);
  const [projectName, setProjectName] = React.useState("Project Name");
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack
      py={1}
      pt={2}
      direction={"row"}
      justifyContent="space-between"
      alignItems="center"
    >
      {/* <Typography variant="h5" color="grey.700">
        My Project Name
      </Typography> */}
      <TextField
        required
        onBlur={() => console.log("cool")}
        value={projectName}
        margin="none"
        onChange={(e) => setProjectName(e.target.value)}
        variant="standard"
      />
      <Box>
        <Tabs
          sx={{ mt: -2.6 }}
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
