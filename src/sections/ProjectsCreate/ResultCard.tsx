import React from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import {
  BookmarkAddOutlined,
  FileCopyOutlined,
  FavoriteBorderRounded,
  CancelOutlined,
  FileCopyRounded,
  BookmarkAddRounded,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { updateSnack } from "../../redux/SnackMessage";
import config from "../../config";
import { Type } from "typescript";
import { addLike, removeLike } from "../../redux/projectSliice";

type Props = {
  content?: { id: string; text: string };
  type?: "save" | "result";
  savedId?: string;
  savedText?: string;
};

const Results = ({ content, type, savedId, savedText }: Props) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const [isRemoved, setIsRemoved] = React.useState(false);
  const [isSavedRemoved, setIsSavedRemoved] = React.useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleCopy = () => {
    setIsCopied(true);
    if (content) {
      navigator.clipboard.writeText(content.text);
    }
    dispatch(
      updateSnack({
        isModalOpen: true,
        message: "Copy to clipboard",
        messageType: "success",
      })
    );
  };

  const handleRemove = () => {
    const projectId = localStorage.getItem("projectId");
    if (type === "save") {
      config.axios
        .post(`project/saved/remove/${projectId}`, {
          likedId: savedId,
          text: savedText,
        })
        .then((res) => {
          setIsSavedRemoved(true);
          dispatch(removeLike(savedId));
          dispatch(
            updateSnack({
              isModalOpen: true,
              message: "UnSaved Successfully",
              messageType: "success",
            })
          );
        })
        .catch((err) => {
          dispatch(
            updateSnack({
              isModalOpen: true,
              message: err.message,
              messageType: "error",
            })
          );
        });
    } else {
      setIsRemoved(true);
    }
  };

  const handleSave = () => {
    const projectId = localStorage.getItem("projectId");
    if (!isSaved) {
      config.axios
        .post(`/project/saved/add/${projectId}`, {
          likedId: content?.id,
          text: content?.text,
        })
        .then((res) => {
          setIsSaved(true);
          if (content) {
            dispatch(addLike({ id: content.id, text: content?.text }));
          }
          dispatch(
            updateSnack({
              isModalOpen: true,
              message: "Saved Successfully",
              messageType: "success",
            })
          );
        })
        .catch((err) => {
          dispatch(
            updateSnack({
              isModalOpen: true,
              message: err.message,
              messageType: "error",
            })
          );
        });
    } else {
      dispatch(
        updateSnack({
          isModalOpen: true,
          message: "Saved Successfully",
          messageType: "success",
        })
      );
    }
  };

  if (isSavedRemoved) {
    return <></>;
  }

  return (
    <>
      {!isRemoved ? (
        <Box
          py={4}
          px={2}
          sx={{
            border: `1px solid ${theme.palette.grey[200]}`,
            backgroundColor: "white",
            borderRadius: "8px",
            whiteSpace: "prev",
            "&:hover": { boxShadow: theme.shadows[4] },
          }}
        >
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <Typography sx={{ fontSize: "1.03rem" }} color="grey.800">
              {content ? content.text.trim() : savedText?.trim()}
            </Typography>
          </pre>
          <Stack
            spacing={1}
            mt={2.2}
            direction="row"
            justifyContent="space-around"
          >
            <Button
              onClick={handleCopy}
              sx={{
                fontSize: {
                  xs: "13px",
                  sm: "14px",
                  backgroundColor: isCopied
                    ? theme.palette.grey[200]
                    : "inherit",
                  color: isCopied ? theme.palette.grey[800] : "primary.main",
                },
              }}
              startIcon={
                isCopied ? (
                  <FileCopyRounded fontSize="small" />
                ) : (
                  <FileCopyOutlined fontSize="small" />
                )
              }
              size="small"
            >
              {isCopied ? "Copied" : "Copy"}
            </Button>
            {type !== "save" && (
              <>
                {" "}
                <Button
                  onClick={handleSave}
                  sx={{
                    fontSize: {
                      xs: "13px",
                      sm: "14px",
                      backgroundColor: isSaved
                        ? theme.palette.grey[200]
                        : "inherit",
                      color: isSaved ? theme.palette.grey[800] : "primary.main",
                    },
                  }}
                  startIcon={
                    isSaved ? (
                      <BookmarkAddRounded fontSize="small" />
                    ) : (
                      <BookmarkAddOutlined fontSize="small" />
                    )
                  }
                  size="small"
                >
                  {isSaved ? "Saved" : "Save"}
                </Button>
                {/* <Button
                  sx={{ fontSize: { xs: "13px", sm: "14px" } }}
                  startIcon={<FavoriteBorderRounded fontSize="small" />}
                  size="small"
                >
                  More Like This
                </Button> */}
              </>
            )}
            <Button
              onClick={handleRemove}
              sx={{ fontSize: { xs: "13px", sm: "14px" } }}
              startIcon={<CancelOutlined fontSize="small" />}
              size="small"
            >
              Remove
            </Button>
          </Stack>
        </Box>
      ) : (
        <RemovedCard setIsRemoved={setIsRemoved} />
      )}
    </>
  );
};

type RemoveCardProps = {
  setIsRemoved: React.Dispatch<React.SetStateAction<boolean>>;
};

const RemovedCard = ({ setIsRemoved }: RemoveCardProps) => {
  const theme = useTheme();
  return (
    <Box
      py={1}
      px={2}
      sx={{
        border: `1px solid ${theme.palette.grey[200]}`,
        backgroundColor: "error.lighter",
        borderRadius: "8px",
        cursor: "pointer",
        "&:hover": { boxShadow: theme.shadows[4] },
      }}
    >
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Typography>This Result is removed</Typography>
        <Button onClick={(p) => setIsRemoved(!p)}>Undo</Button>
      </Stack>
    </Box>
  );
};

export default Results;
