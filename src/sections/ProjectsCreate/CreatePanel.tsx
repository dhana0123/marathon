import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import ProjectCreateTopBar from "./ProjectCreateTopBar";
import config from "../../config";
import Results from "./Results";

const CreatePanel = () => {
  return (
    <Box
      sx={{
        maxWidth: "543px",
        m: "auto",
      }}
    >
      <Box
        border={(theme) => `1px solid ${theme.palette.grey[200]}`}
        sx={{ mt: 3, px: 4.5, py: 3, borderRadius: "8px", background: "white" }}
      >
        <Typography variant="h5" color={"grey.800"}>{`Facebook Ad`}</Typography>
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
      </Box>
      <Results />
    </Box>
  );
};

export default CreatePanel;
