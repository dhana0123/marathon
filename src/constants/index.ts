import type { Menu } from "../definations/Nav";
import { AddHomeRounded, Send, AddCircle } from "@mui/icons-material";

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

export const tools: Menu[] = [product, digitalAdCopy, statupTool];
