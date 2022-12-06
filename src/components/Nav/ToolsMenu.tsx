import React, { useEffect } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, Send, Drafts, ExpandMore } from "@mui/icons-material";
import type { Menu } from "../../definations/Nav";

type Props = {
  tools: Menu;
  menuId: number;
  currentSelectedMenu: number;
  setCurrentSelectedMenu: React.Dispatch<React.SetStateAction<number>>;
};

const ToolsMenu = ({
  tools,
  menuId,
  currentSelectedMenu,
  setCurrentSelectedMenu,
}: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [ParentSelected, setParentSelected] = React.useState(false);
  const [currentChildSelectedId, setCurrentChildSelctedId] = React.useState(-1);

  const handleClick = () => {
    setOpen((p) => !p);
  };

  React.useEffect(() => {
    if (menuId !== currentSelectedMenu) {
      setOpen(false);
    }
  }, [currentSelectedMenu]);

  React.useEffect(() => {
    if (open) {
      setCurrentSelectedMenu(menuId);
    }
    if (!open) {
      setParentSelected(false);
      setCurrentChildSelctedId(-1);
    }
  }, [open]);

  const handleChildClick = (id: number) => {
    if (currentChildSelectedId === id) {
      setCurrentChildSelctedId(-1);
      setParentSelected(false);
    } else {
      setCurrentChildSelctedId(id);
      setParentSelected(true);
    }
  };

  return (
    <>
      <ListItem>
        <ListItemButton
          onClick={handleClick}
          selected={ParentSelected && currentChildSelectedId >= 0}
        >
          <ListItemIcon>
            <tools.icon />
          </ListItemIcon>
          <ListItemText primary={tools.title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          {tools.list.map((tool, idx) => (
            <ListItem key={tool.id} onClick={() => handleChildClick(idx)}>
              <ListItemButton
                selected={currentChildSelectedId === idx}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>
                  <Drafts />
                </ListItemIcon>
                <ListItemText primary={tool.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default ToolsMenu;
