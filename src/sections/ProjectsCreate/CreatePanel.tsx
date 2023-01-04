import React from "react";
import {
  Box,
  TextField,
  FormControl,
  Typography,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Select,
} from "@mui/material";
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

  const generateContentHandler = (position?: string) => {
    if (position === "main") {
      setContent([]);
    }
    dispatch(
      addContent({
        productName: productVal,
        description: descriptionVal,
        tone: toneVal,
      })
    );
    setLoading(true);
    const projectId = localStorage.getItem("projectId");
    config.axios
      .post(`/tool/${currentTool.endPoint}`, {
        productName: productVal,
        tone: toneVal,
        description: descriptionVal,
        projectId: projectId,
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

  const handleToneChange = (event: SelectChangeEvent) => {
    setToneVal(event.target.value as string);
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
          {currentTool.brandNameRequired && (
            <TextField
              fullWidth
              placeholder={
                currentTool.brandPlaceholder
                  ? currentTool.brandPlaceholder
                  : "e.g. Writy.ai"
              }
              label={
                currentTool.brandName
                  ? currentTool.brandName
                  : "What is your product called?"
              }
              variant="outlined"
              value={productVal}
              onChange={(e) => setProductVal(e.target.value)}
            />
          )}
          {currentTool.descriptionRequired && (
            <TextField
              sx={{ my: 3 }}
              fullWidth
              multiline
              minRows={5}
              placeholder={
                currentTool.descriptionPlaceholder
                  ? currentTool.descriptionPlaceholder
                  : "e.g. Writy.ai is an AI powered first simplest copy writing tool."
              }
              label={
                currentTool.descriptionName
                  ? currentTool.descriptionName
                  : "Describe your product"
              }
              variant="outlined"
              value={descriptionVal}
              onChange={(e) => setDescriptionVal(e.target.value)}
            />
          )}
          {currentTool.toneRequired && (
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel id="demo-simple-select-label">
                Choose a tone
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={toneVal}
                label="Choose a tone"
                onChange={handleToneChange}
              >
                <MenuItem value={"friendly"}>😄 Friendly</MenuItem>
                <MenuItem value={"luxury"}>💍 Luxury</MenuItem>
                <MenuItem value={"funny"}>😆 Funny</MenuItem>
                <MenuItem value={"relaxed"}>🤟🏼 Relaxed</MenuItem>
                <MenuItem value={"professional"}>💼 Professional</MenuItem>
                <MenuItem value={"bold"}> 🦾 Bold</MenuItem>
                <MenuItem value={"adventurous"}> 👨‍🚀 Adventurous</MenuItem>
                <MenuItem value={"persuasive"}> 👋 Persuasive</MenuItem>
                <MenuItem value={"empathetic"}> 🤗 Empathetic</MenuItem>
                <MenuItem value={"witty"}> 😎 Witty</MenuItem>
              </Select>
            </FormControl>
          )}
          <LoadingButton
            loading={loading}
            loadingPosition="start"
            onClick={() => generateContentHandler("main")}
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
