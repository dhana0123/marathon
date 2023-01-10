import React from "react";
import { Box, ClickAwayListener, Collapse } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { hideTools, selectTool } from "../../redux/toolsSlice";
import Detail from "./Detail";

const DetailModal = () => {
  const { showTools } = useAppSelector(selectTool);
  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        position: "absolute",
        top: "0px",
        left: "0px",
        right: "00px",
        bottom: "30px",
        height: showTools ? "99vh" : "0px",
        transition: ".5s",
        zIndex: 100,
        overflow: "hidden",
      }}
    >
      <Collapse in={showTools}>
        <Box
          sx={{
            borderRadius: "16px",
            background: "white",
            zIndex: 8,
            height: "30rem",
            overflow: "scroll",
          }}
          boxShadow={(theme) => theme.shadows[12]}
        >
          <Detail />
        </Box>
      </Collapse>

      <Box sx={{ height: "100%" }} onClick={() => dispatch(hideTools())}></Box>
    </Box>
  );
};

export default DetailModal;
