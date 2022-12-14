import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import CreatePanel from "../sections/ProjectsCreate/CreatePanel";
import EditorPanel from "../sections/ProjectsCreate/Editor";

const ProjectCreate = () => {
  const theme = useTheme();
  return (
    <Box my={2}>
      <Stack direction={"row"} minHeight={"100vh"}>
        <Box width={{ xs: "100%", sm: "50%" }}>
          <CreatePanel />
        </Box>
        <Box
          sx={{
            border: "1.5px",
            borderColor: "grey.400",
            borderStyle: "dashed",
            borderRight: "none",
            borderTop: "none",
            borderBottom: "none",
            display: { xs: "none", sm: "inherit" },
          }}
          width={"50%"}
        >
          <EditorPanel />
        </Box>
      </Stack>
    </Box>
  );
};

export default ProjectCreate;
