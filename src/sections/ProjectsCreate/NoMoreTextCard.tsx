import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  NoMoreMessageText: string;
};

const NoMoreTextCard = ({ NoMoreMessageText }: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box
      py={4}
      px={2}
      sx={{
        border: `1px solid ${theme.palette.error.main}`,
        backgroundColor: theme.palette.error.main,
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6" color="white">
        {NoMoreMessageText}
      </Typography>
      <Typography variant="body2" color="white">
        Upgrade now to continue using writy
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/plans")}
        sx={{
          backgroundColor: "white",
          color: "black",
          mt: 2,
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        Try a Premium Plan
      </Button>
    </Box>
  );
};

export default NoMoreTextCard;
