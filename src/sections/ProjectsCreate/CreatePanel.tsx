import React from "react";
import {
  Box,
  TextField,
  FormControl,
  Typography,
  InputLabel,
  Button,
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
import ResultCard from "./ResultCard";
import { Stack } from "@mui/system";
import NoMoreTextCard from "./NoMoreTextCard";

const CreatePanel = () => {
  const { currentTool } = useAppSelector(selectTool);
  const { productName, tone, description, liked } =
    useAppSelector(selectProject);
  const [productVal, setProductVal] = React.useState(productName);
  const [descriptionVal, setDescriptionVal] = React.useState(description);
  const [toneVal, setToneVal] = React.useState(tone);
  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState<{ id: string; text: string }[]>(
    []
  );
  const [showSaved, setShowSaved] = React.useState(false);
  const [NoMoreTextCard, setNoMoreTextCard] = React.useState(false);
  const [NoMoreMessageText, setNoMoreTextMessage] = React.useState("");
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
    const user = localStorage.getItem("userId");
    config.axios
      .post(`/tool/${currentTool.endPoint}`, {
        productName: productVal,
        tone: toneVal,
        description: descriptionVal,
        projectId: projectId,
        user,
      })
      .then((res) => {
        if (res.data.result) {
          if (position === "main") {
            setContent([...res.data.result]);
          } else {
            setContent([...content, ...res.data.result]);
          }
          setNoMoreTextCard(false);
        } else {
          setNoMoreTextMessage(res.data.message);
          setNoMoreTextCard(true);
        }
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
        maxWidth: "600px",
        m: "auto",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: "5rem",
          pt: 2.1,
          mt: "4rem",
          zIndex: 60,
          mb: "-2.4rem",
          px: 4.5,
          background: "white",
          borderRadius: "8px",
        }}
      >
        <ProjectCreateTopBar
          setShowSaved={setShowSaved}
          title={currentTool.title}
        />
      </Box>
      {showSaved ? (
        <Stack spacing={2} pt={7}>
          {(liked || []).map((like, idx) => {
            return (
              <ResultCard
                type={"save"}
                key={like.id}
                savedId={like?.id}
                savedText={like.text}
              />
            );
          })}
        </Stack>
      ) : (
        <>
          <Box
            border={(theme) => `1px solid ${theme.palette.grey[200]}`}
            sx={{
              mt: 3,
              px: 4.5,
              py: 3,
              borderRadius: "8px",
              background: "white",
            }}
          >
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
          <Box>
            <Results
              loading={loading}
              setLoading={setLoading}
              content={content}
              generateContentHandler={generateContentHandler}
              NoMoreTextCard={NoMoreTextCard}
              NoMoreMessageText={NoMoreMessageText}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default CreatePanel;
