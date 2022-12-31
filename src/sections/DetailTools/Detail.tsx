import React from "react";
import { Box, Grid } from "@mui/material";
import ToolDetail from "./ToolDetail";
import { useAppSelector } from "../../redux/store";
import { selectTool } from "../../redux/toolsSlice";
import { tools } from "../../constants";

const Detail = () => {
  const { currentDetailTool } = useAppSelector(selectTool);

  const getToolsDetailList = React.useCallback(() => {
    return tools.find((toollist) => toollist.title === currentDetailTool);
  }, [currentDetailTool]);

  return (
    <Box sx={{ maxWidth: "960px", margin: "auto", minHeight: "77.8vh" }}>
      <Grid container pt={11} spacing={2}>
        {(getToolsDetailList()?.list || []).map((tool) => {
          return (
            <Grid key={tool.id} xs={12} sm={4} item>
              <ToolDetail />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Detail;
