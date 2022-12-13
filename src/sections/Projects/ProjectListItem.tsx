import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { DescriptionRounded, MoreVert } from "@mui/icons-material";

const ProjectListItem = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent="space-between"
      p={1}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <IconButton sx={{ mr: 1 }}>
          <DescriptionRounded sx={{ color: "grey.400" }} />
        </IconButton>
        <Typography variant="subtitle1" color={"grey.700"}>
          My Project Name
        </Typography>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography variant={"body2"} color="grey.600" sx={{ mr: 1 }}>
          Yesterday
        </Typography>
        <IconButton>
          <MoreVert />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ProjectListItem;
