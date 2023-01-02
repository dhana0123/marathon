import React from "react";
import { Typography, Stack, Button, IconButton } from "@mui/material";
import { DatasetRounded, ViewStreamRounded } from "@mui/icons-material";

type Props = {
  changeProjectView: boolean;
  setChangeProjectView: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectTopBar = ({ changeProjectView, setChangeProjectView }: Props) => {
  return (
    <Stack
      px={4}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Typography variant="h4" color="grey.800">
        Projects
      </Typography>
      <Stack direction={"row"}>
        <IconButton
          sx={{
            backgroundColor: "grey.100",
            display: { xs: "none", sm: "inherit" },
          }}
          onClick={() => setChangeProjectView((p) => !p)}
        >
          {changeProjectView ? (
            <DatasetRounded sx={{ color: "grey.600" }} />
          ) : (
            <ViewStreamRounded sx={{ color: "grey.600" }} />
          )}
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ProjectTopBar;
