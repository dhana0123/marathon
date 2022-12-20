import React from "react";
import { List, ListSubheader, Button, Stack, Box } from "@mui/material";
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
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            sx={{ color: "grey.500", ...theme.typography.subtitle2 }}
            component="div"
            id="nested-list-subheader"
          >
            TOOLS
          </ListSubheader>
        }
        sx={{ py: 1 }}
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
