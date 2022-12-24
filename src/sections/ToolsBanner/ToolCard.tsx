import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import google from "../../assets/images/facebook.png";

const ToolCard = () => {
  const theme = useTheme();
  return (
    <Box
      border={(theme) => `1px solid ${theme.palette.grey[200]}`}
      p={2}
      borderRadius={"8px"}
      sx={{
        cursor: "pointer",
        background: "white",
        boxShadow: theme.shadows[8],
      }}
    >
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Box>
          <img src={google} width={40} height={40} />
        </Box>
        <Box>
          <Typography variant="subtitle1">Tool Name</Typography>
          <Typography variant="body2" sx={{ color: "grey.600" }}>
            This tool used for many puropors where you cant imagint
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ToolCard;
