import React from "react";
import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { openNewProjectModal, selectProject } from "../../redux/projectSliice";

const CreateProjectList = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  return (
    <Stack
      onClick={() => dispatch(openNewProjectModal())}
      direction={"row"}
      alignItems={"center"}
      justifyContent="center"
      p={1}
      sx={{
        cursor: "pointer",
        backgroundColor: "primary.main",
        borderRadius: "8px",
        mb: 2,
      }}
    >
      <IconButton>
        <Add sx={{ color: "white" }} />
      </IconButton>
      <Typography color="white"> Create New Project</Typography>
    </Stack>
  );
};

export default CreateProjectList;
