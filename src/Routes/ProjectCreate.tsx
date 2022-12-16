import React from "react";
import { Box, Divider, Stack, Button, Slide } from "@mui/material";
import { useTheme } from "@mui/system";
import CreatePanel from "../sections/ProjectsCreate/CreatePanel";
import WritingPad from "../sections/ProjectsCreate/WritingPad";
import { CloseRounded, CreateRounded } from "@mui/icons-material";

const ProjectCreate = () => {
  const theme = useTheme();
  const [isEditorShown, setIsEditorShown] = React.useState(true);
  return (
    <Box my={2}>
      <Stack direction={"row"} minHeight={"100vh"}>
        <Box
          width={{
            xs: "100%",
            sm: isEditorShown ? "60%" : "100%",
            position: "relative",
            //@ts-ignore
            transition: theme?.transitions.create(["width"]),
          }}
        >
          {!isEditorShown && (
            <Button
              onClick={() => setIsEditorShown(true)}
              startIcon={
                <CreateRounded sx={{ width: ".8rem", height: ".8rem" }} />
              }
              sx={{
                position: "absolute",
                top: 130,
                right: "-3.6%",
                transformOrigin: "50%",
                transform: "rotate(270deg)",
                backgroundColor: theme.palette.grey[800],
                fontSize: ".7rem",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: theme.palette.grey[600],
                  boxShadow: "none",
                },
              }}
              variant="contained"
              size="small"
            >
              Open Editor
            </Button>
          )}
          <CreatePanel />
        </Box>

        <Slide in={isEditorShown} direction="left">
          <Box
            sx={{
              position: "relative",
              border: "1.5px",
              borderColor: "grey.400",
              borderStyle: "dashed",
              borderRight: "none",
              borderTop: "none",
              borderBottom: "none",
              display: { xs: "none", sm: isEditorShown ? "inherit" : "none" },
            }}
            width={"40%"}
          >
            <Button
              onClick={() => setIsEditorShown(false)}
              startIcon={
                <CloseRounded sx={{ width: ".8rem", height: ".8rem" }} />
              }
              sx={{
                position: "absolute",
                top: 130,
                left: -48,
                transformOrigin: "50%",
                transform: "rotate(270deg)",
                backgroundColor: theme.palette.grey[800],
                fontSize: ".7rem",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: theme.palette.grey[600],
                  boxShadow: "none",
                },
              }}
              variant="contained"
              size="small"
            >
              Close
            </Button>

            <WritingPad />
          </Box>
        </Slide>
      </Stack>
    </Box>
  );
};

export default ProjectCreate;
