import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import google from "../../assets/images/google.png";
import { useDispatch } from "react-redux";
import { addSelectedCurrentTool } from "../../redux/toolsSlice";

type Props = {
  tool: {
    id: number;
    title: string;
    category: string;
    icon?: any;
    detail?: string | undefined;
  };
};

const ToolDetail = ({ tool }: Props) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box
      onClick={() => dispatch(addSelectedCurrentTool(tool))}
      border={(theme) => `1px solid ${theme.palette.grey[300]}`}
      p={2}
      borderRadius={"8px"}
      sx={{
        cursor: "pointer",
        background: "white",
        height: "6.3rem",
        "&:hover": {
          boxShadow: theme.shadows[8],
          backgorund: "primary.lighter",
        },
      }}
    >
      <Stack
        sx={{ height: "100%" }}
        direction={"row"}
        spacing={2}
        alignItems={"center"}
      >
        <Box>
          <img src={google} width={40} height={40} />
        </Box>
        <Box>
          <Typography variant="subtitle1">{tool.title}</Typography>
          <Typography variant="body2" sx={{ color: "grey.600" }}>
            {tool.detail}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ToolDetail;
