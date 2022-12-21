import React from "react";
import {
  List,
  ListSubheader,
  Button,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ToolsMenu } from "../../components/Nav";
import { tools } from "../../constants";

const SideNav = () => {
  const [currentSelectedMenu, setCurrentSelectedMenu] = React.useState(-1);
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: { xs: "260px" },
        backgroundColor: theme.palette.grey[800],
        height: "100%",
      }}
    >
      <Stack p={2}>
        <Button
          onClick={() => navigate("/dashboard/Projects/create")}
          startIcon={<AddCircle />}
          variant="contained"
        >
          New Project
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
