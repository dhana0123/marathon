import { SvgIcon } from "@mui/material";

export type Menu = {
  id: number;
  title: string;
  icon: SvgIcon;
  list: {
    id: number;
    title: string;
    category: string;
    icon?: SvgIcon;
    detail?: string;
  }[];
};
