import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import ProjectCreateTopBar from "./ProjectCreateTopBar";
import config from "../../config";
import Results from "./Results";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectTool } from "../../redux/toolsSlice";
import { addContent, selectProject } from "../../redux/projectSliice";
import { updateSnack } from "../../redux/SnackMessage";

const CreatePanel = () => {
  const { currentTool } = useAppSelector(selectTool);
  const { productName, tone, description } = useAppSelector(selectProject);
  const [productVal, setProductVal] = React.useState(productName);
  const [descriptionVal, setDescriptionVal] = React.useState(description);
  const [toneVal, setToneVal] = React.useState(tone);
  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState<string[]>([]);
  const dispatch = useAppDispatch();

  const generateContentHandler = () => {
    dispatch(
      addContent({
        productName: productVal,
        description: descriptionVal,
        tone: toneVal,
      })
    );
    setLoading(true);
    config.axios
      .post(`/tool/${currentTool.endPoint}`, {
        productName: productVal,
        tone: toneVal,
        description: descriptionVal,
      })
      .then((res) => {
        setContent([...content, ...res.data.result]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        dispatch(
          updateSnack({
            isModalOpen: true,
            message: err.message,
            messageType: "error",
          })
        );
      });
  };

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
        <Typography variant="h5" color={"primary.main"}>
          {currentTool.title}
        </Typography>
        <ProjectCreateTopBar />
        <Box py={2}>
          <TextField
            fullWidth
            placeholder="e.g. Marathon.ai"
            label="What is your product called?"
            variant="outlined"
            value={productVal}
            onChange={(e) => setProductVal(e.target.value)}
          />
          <TextField
            sx={{ my: 3 }}
            fullWidth
            multiline
            minRows={5}
            placeholder="e.g. Marathon.ai"
            label="What is your product called?"
            variant="outlined"
            value={descriptionVal}
            onChange={(e) => setDescriptionVal(e.target.value)}
          />
          <LoadingButton
            loading={loading}
            loadingPosition="start"
            onClick={generateContentHandler}
            sx={{ backgroundColor: "grey.800", py: 1.3 }}
            fullWidth
            size="large"
            variant="contained"
          >
            Create Content
          </LoadingButton>
        </Box>
      </Box>
      <Results
        loading={loading}
        setLoading={setLoading}
        content={content}
        setContent={setContent}
        generateContentHandler={generateContentHandler}
      />
    </Box>
  );
};

export default CreatePanel;
