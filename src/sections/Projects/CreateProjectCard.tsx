import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const CreateProjectCard = () => {
  const theme = useTheme();
  return (
    <Box
      onClick={() => console.log("cool")}
      p={3}
      pt={1}
      borderRadius={"16px"}
      sx={{
        cursor: "pointer",
        background: "white",
        border: `2px dashed ${theme.palette.primary.main}`,
        backgroundColor: "primary.main",
        height: "13rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          boxShadow: theme.shadows[8],
        },
      }}
    >
      <Box textAlign={"center"}>
        <IconButton>
          <Add sx={{ color: "white" }} />
        </IconButton>
        <Typography textAlign={"center"} color={"white"} variant="subtitle1">
          Create New Project
        </Typography>
      </Box>
    </Box>
  );
};

export default CreateProjectCard;