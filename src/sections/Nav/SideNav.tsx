import React from "react";
import { List, ListSubheader, Button, Stack, Box } from "@mui/material";
import { AddHomeRounded, Send, AddCircle } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { ToolsMenu } from "../../components/Nav";
import type { Menu } from "../../definations/Nav";

const SideNav = () => {
  const [currentSelectedMenu, setCurrentSelectedMenu] = React.useState(-1);
  const theme = useTheme();
  const product: Menu = {
    id: 1,
    title: "Product",
    icon: AddHomeRounded,
    list: [
      {
        id: 1,
        title: "Product Descriptions",
        icon: Send,
      },
    ],
  };
  const digitalAdCopy: Menu = {
    id: 1,
    title: "Digital Ad Copy",
    icon: Send,
    list: [
      {
        id: 1,
        title: "Ad Copy Variants",
        icon: Send,
      },
      {
        id: 2,
        title: "Facebook Headlines",
        icon: Send,
      },
      {
        id: 3,
        title: "Facebook Link Descriptions",
        icon: Send,
      },
      {
        id: 4,
        title: "Facebook Listicle",
        icon: Send,
      },
      {
        id: 5,
        title: "Facebook Primary Text",
        icon: Send,
      },
    ],
  };
  const statupTool: Menu = {
    id: 1,
    title: "Startup Tools",
    icon: Send,
    list: [
      {
        id: 1,
        title: "Audience Refiner",
      },
      {
        id: 2,
        title: "Brand Mission",
      },
      {
        id: 3,
        title: "Brand Voice",
      },
      {
        id: 4,
        title: "Motto Generator",
      },
      {
        id: 5,
        title: "Value Proposition",
      },
    ],
  };

  const menuLists: Menu[] = [product, digitalAdCopy, statupTool];

  return (
    <Box sx={{ width: { xs: "260px" } }}>
      <Stack p={2}>
        <Button startIcon={<AddCircle />} sx={{ p: 1.3 }} variant="contained">
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
        {(menuLists || []).map((menu, idx) => (
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
