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
    <Box>
      <Box>
        <Editor
          editorState={editorState}
          editorStyle={{
            minHeight: "80vh",
            padding: "1em",
            paddingTop: 0,
            background: "white",
          }}
          toolbarStyle={{ backgroundColor: theme.palette.grey[300] }}
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
