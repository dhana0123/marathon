import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useAppDispatch } from "../../redux/store";
import { openNewProjectModal } from "../../redux/projectSliice";

const CreateProjectCard = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  return (
    <Box
      onClick={() => dispatch(openNewProjectModal())}
      p={3}
      pt={1}
      borderRadius={"16px"}
      sx={{
        cursor: "pointer",
        background: "white",
        border: `2px dashed ${theme.palette.primary.main}`,
        backgroundColor: "primary.main",
        height: "100%",
        minHeight: "13rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          boxShadow: theme.shadows[8],
        },
      }}
    >
      <Box textAlign={"center"}>
        <IconButton sx={{ backgroundColor: "#18B365" }}>
          <Add sx={{ color: "white", opacity: 1 }} />
        </IconButton>
        <Typography textAlign={"center"} color={"white"} variant="subtitle1">
          Create New Project
        </Typography>
      </Box>
    </Box>
  );
};

export default CreateProjectCard;
