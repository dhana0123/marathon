import React from "react";
import { List, ListSubheader } from "@mui/material";
import { Send } from "@mui/icons-material";
import { ToolsMenu } from "../../components/Nav";
import type { Menu } from "../../definations/Nav";

const SideNav = () => {
  const [currentSelectedMenu, setCurrentSelectedMenu] = React.useState(-1);
  const toolMenu: Menu = {
    id: 1,
    title: "product title",
    icon: Send,
    list: [
      {
        id: 1,
        title: "tool1",
        icon: Send,
      },
      {
        id: 2,
        title: "tool1",
        icon: Send,
      },
    ],
  };
  const toolMenu2: Menu = {
    id: 1,
    title: "product title1",
    icon: Send,
    list: [
      {
        id: 1,
        title: "tool1",
        icon: Send,
      },
      {
        id: 2,
        title: "tool1",
        icon: Send,
      },
    ],
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Tools
        </ListSubheader>
      }
    >
      <ToolsMenu
        menuId={1}
        tools={toolMenu}
        currentSelectedMenu={currentSelectedMenu}
        setCurrentSelectedMenu={setCurrentSelectedMenu}
      />
      <ToolsMenu
        menuId={2}
        tools={toolMenu2}
        currentSelectedMenu={currentSelectedMenu}
        setCurrentSelectedMenu={setCurrentSelectedMenu}
      />
    </List>
  );
};

export default SideNav;
