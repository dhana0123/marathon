import React from "react";
import { Box, Grid, IconButton, Typography, Stack } from "@mui/material";
import ToolDetail from "./ToolDetail";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { hideTools, selectTool } from "../../redux/toolsSlice";
import { tools } from "../../constants";
import { Cancel } from "@mui/icons-material";

const Detail = () => {
  const { currentDetailTool } = useAppSelector(selectTool);
  const getToolsDetailList = React.useCallback(() => {
    return tools.find((toollist) => toollist.title === currentDetailTool);
  }, [currentDetailTool]);

  const dispatch = useAppDispatch();

  return (
    <Box sx={{ margin: "auto", maxWidth: "1150px", position: "relative" }}>
      <Stack
        position={"sticky"}
        bgcolor="white"
        top={0}
        px={4}
        py={1}
        direction={"row"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4" py={2} sx={{ color: "primary.main" }}>
          {currentDetailTool}
        </Typography>
        <Box>
          <IconButton
            sx={{ color: "grey.800" }}
            onClick={() => dispatch(hideTools())}
          >
            <Cancel fontSize={"medium"} />
          </IconButton>
        </Box>
      </Stack>
      <Grid container spacing={2} px={4}>
        {(getToolsDetailList()?.list || []).map((tool) => {
          return (
            <Grid key={tool.id} xs={12} sm={4} item>
              <ToolDetail tool={tool} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Detail;
