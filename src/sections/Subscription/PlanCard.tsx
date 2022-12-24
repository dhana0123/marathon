import React from "react";
import {
  Box,
  Stack,
  Typography,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTheme } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type Props = {
  plan?: string;
  title?: string;
  price?: string;
  description?: string;
  subtitle?: string;
  buttonTitle: string;
  time: string;
  highlet?: boolean;
  benfits: string[];
  onButtonOnClick: () => void;
};

const PlanCard = ({
  title,
  price,
  description,
  buttonTitle,
  highlet,
  time,
  benfits,
  onButtonOnClick,
}: Props) => {
  const theme = useTheme();
  const [btnLoading, setBtnLoading] = React.useState(false);
  return (
    <Box
      p={4}
      borderRadius={"8px"}
      width={{ xs: "100%", sm: "21rem" }}
      sx={{
        border: `1px solid ${theme.palette.grey[300]}`,
        "&:hover": {
          boxShadow: theme.shadows[24],
        },
        boxShadow: highlet ? theme.shadows[24] : "none",
        backgroundColor: "white",
        height: "100%",
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
        <Typography sx={{ display: "inline-block", ml: "1" }} variant="h5">
          {time}
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
        <List>
          {(benfits || []).map((benfit) => (
            <ListItem key={benfit}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <Typography ml={-2}>{benfit}</Typography>
            </ListItem>
          ))}
        </List>
        <LoadingButton
          loading={btnLoading}
          size="large"
          onClick={() => {
            onButtonOnClick();
            setBtnLoading(true);
          }}
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
        >
          {buttonTitle}
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default PlanCard;
