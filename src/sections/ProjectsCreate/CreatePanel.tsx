import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import ProjectCreateTopBar from "./ProjectCreateTopBar";
import Results from "./Results";

const CreatePanel = () => {
  return (
    <Box sx={{ maxWidth: "543px", m: "auto", mt: 3, px: 4.5 }}>
      <Typography
        variant="subtitle2"
        color={"grey.600"}
      >{`Tools > Facebook Add`}</Typography>
      <ProjectCreateTopBar />
      <Box py={2}>
        <TextField
          fullWidth
          placeholder="e.g. Marathon.ai"
          label="What is your product called?"
          variant="outlined"
        />
        <TextField
          sx={{ my: 3 }}
          fullWidth
          multiline
          minRows={5}
          placeholder="e.g. Marathon.ai"
          label="What is your product called?"
          variant="outlined"
        />
        <Button
          sx={{ backgroundColor: "primary" }}
          fullWidth
          size="large"
          variant="contained"
        >
          Create Content
        </Button>
      </Box>
      <Results />
    </Box>
  );
};

export default CreatePanel;
