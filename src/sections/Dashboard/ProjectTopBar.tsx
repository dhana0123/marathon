import React from "react";
import {  Typography, Stack, Button, IconButton } from "@mui/material";
import { DatasetRounded, ViewStreamRounded } from "@mui/icons-material";
const ProjectTopBar = () => {
  const [changeProjectView, setChangeProjectView] = React.useState(false);
  return (
 
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography variant="h4" color="grey.800">
          Projects
        </Typography>
        <Stack direction={"row"}>
          <IconButton
            sx={{ backgroundColor: "grey.100" }}
            onClick={() => setChangeProjectView((p) => !p)}
          >
            {changeProjectView ? (
              <DatasetRounded sx={{ color: "grey.500" }} />
            ) : (
              <ViewStreamRounded sx={{ color: "grey.500" }} />
            )}
          </IconButton>
        </Stack>
      </Stack>

  );
};

export default ProjectTopBar;
