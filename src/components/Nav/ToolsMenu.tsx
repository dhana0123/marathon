import React, { useEffect } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Collapse,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  ChevronRight,
  ExpandMore,
  FiberManualRecord,
} from "@mui/icons-material";
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

  const theme = useTheme();

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

  const isParentSelcted = ParentSelected && currentChildSelectedId >= 0;
  const isChildSelected = (idx: number) => currentChildSelectedId === idx;

  return (
    <>
      <ListItem sx={{ marginTop: "-.7rem", marginBottom: "0rem" }}>
        <ListItemButton
          sx={{
            borderRadius: "8px",
            p: 1.7,
            my: 0,
          }}
          onClick={handleClick}
          selected={isParentSelcted}
        >
          <ListItemIcon>
            <tools.icon
              size="small"
              sx={{
                width: "1.6rem",
                height: "1.6rem",
                color: isParentSelcted
                  ? theme.palette.primary.main
                  : theme.palette.grey[600],
              }}
            />
          </ListItemIcon>
          <Typography
            variant="subtitle2"
            color={isParentSelcted ? "primary.main" : "grey.600"}
            sx={{
              ml: "-1rem",
            }}
          >
            {tools.title}
          </Typography>
          {open ? (
            <ExpandMore
              sx={{
                ml: "auto",
                fontSize: "1.1rem",
                color: isParentSelcted
                  ? theme.palette.primary.main
                  : theme.palette.grey[700],
              }}
            />
          ) : (
            <ChevronRight
              sx={{
                ml: "auto",
                fontSize: "1.1rem",
                color: theme.palette.grey[700],
              }}
            />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" sx={{ my: 0 }}>
          {tools.list.map((tool, idx) => (
            <ListItem
              sx={{ mt: "-.7rem" }}
              key={tool.id}
              onClick={() => handleChildClick(idx)}
            >
              <ListItemButton
                selected={isChildSelected(idx)}
                sx={{
                  borderRadius: "8px",
                  my: 0,
                  p: 1,
                  pl: 3,
                }}
              >
                <ListItemIcon>
                  <FiberManualRecord
                    sx={{
                      width: isChildSelected(idx) ? ".75rem" : ".55rem",
                      height: isChildSelected(idx) ? ".75rem" : ".55rem",
                      color: isChildSelected(idx) ? "primary.main" : "grey.500",
                    }}
                  />
                </ListItemIcon>
                <Typography
                  variant={"subtitle2"}
                  color={isChildSelected(idx) ? "primary.main" : "grey.600"}
                  noWrap
                  sx={{
                    width: "100%",
                    fontSize: ".758rem",
                    ml: "-2.3rem",
                  }}
                >
                  {tool.title}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default ToolsMenu;
