import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { Box, useTheme } from "@mui/material";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const WritingPad = () => {
  const theme = useTheme();
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  return (
    <Box
      sx={{
        background: "white",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box>
        <Editor
          editorState={editorState}
          editorStyle={{
            height: "75vh",
            padding: "1em",
            paddingTop: 0,
            background: "white",
            overflowY: "scroll",
          }}
          toolbarStyle={{
            backgroundColor: theme.palette.grey[200],
          }}
          toolbar={{
            options: ["inline", "blockType", "fontSize", "list", "history"],
            inline: {
              options: ["bold", "italic", "underline"],
            },
          }}
          onEditorStateChange={onEditorStateChange}
        />
      </Box>
    </Box>
  );
};

export default WritingPad;
