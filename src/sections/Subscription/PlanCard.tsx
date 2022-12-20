import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type Props = {
  plan?: string;
  title?: string;
  price?: string;
  description?: string;
  subtitle?: string;
  buttonTitle: string;
  highlet?: boolean;
  onButtonOnClick: () => void;
};

const PlanCard = ({
  title,
  price,
  description,
  buttonTitle,
  highlet,
  onButtonOnClick,
}: Props) => {
  const theme = useTheme();
  return (
    <Box
      p={4}
      borderRadius={"8px"}
      width="21rem"
      sx={{
        border: `1px solid ${theme.palette.grey[300]}`,
        "&:hover": {
          boxShadow: theme.shadows[24],
        },
        boxShadow: highlet ? theme.shadows[24] : "none",
      }}
    >
      <Box>
        <Typography color="grey.500" variant="subtitle1">
          {title}
        </Typography>
        <Typography
          sx={{ display: "inline-block", ml: 5, mr: 1, mt: 5 }}
          variant="h5"
        >
          $
        </Typography>
        <Typography sx={{ display: "inline-block" }} variant="h2">
          {price}
        </Typography>
        <Typography
          my={2}
          color="grey.600"
          variant="body2"
          textAlign={"center"}
        >
          {description}
        </Typography>
      </Box>
      <Box>
        <Button
          onClick={onButtonOnClick}
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
        >
          {buttonTitle}
        </Button>
      </Box>
    </Box>
  );
};

export default PlanCard;
