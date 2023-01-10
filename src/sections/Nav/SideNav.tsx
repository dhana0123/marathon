import React from "react";
import {
  List,
  ListSubheader,
  Snackbar,
  Button,
  Stack,
  Box,
  Alert,
  Typography,
  AlertColor,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { AddCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ToolsMenu } from "../../components/Nav";
import { tools } from "../../constants";
import config from "../../config";

const SideNav = () => {
  const [currentSelectedMenu, setCurrentSelectedMenu] = React.useState(-1);

  React.useState<AlertColor>("success");
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: { xs: "260px" },
        // backgroundColor: theme.palette.grey[800],
        height: "100%",
      }}
    >
      <Stack p={2}>
        <LoadingButton
          loadingPosition="start"
          startIcon={<AddCircle />}
          variant="contained"
        >
          New Project
        </LoadingButton>
        <Button
          sx={{ mt: 2 }}
          onClick={() => navigate("/projects")}
          variant="outlined"
        >
          Projects
        </Button>
      </Stack>
      <Typography color="grey.200" variant="subtitle1" px={2}>
        Tools
      </Typography>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        sx={{ py: 1, backgroundColor: theme.palette.grey[800] }}
      >
        {(tools || []).map((menu, idx) => (
          <ToolsMenu
            key={idx}
            menuId={idx + 1}
            tools={menu}
            currentSelectedMenu={currentSelectedMenu}
            setCurrentSelectedMenu={setCurrentSelectedMenu}
          />
        ))}
      </List>
    </Box>
  );
};

export default SideNav;
