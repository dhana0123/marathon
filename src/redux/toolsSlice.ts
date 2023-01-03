import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { Tool } from "../definations/project";

// Define a type for the slice state
interface InitialState {
  currentTool: Tool;
  currentDetailTool: string;
  showTools: boolean;
}

// Define the initial state using that type
const initialState: InitialState = {
  currentTool: {
    title: "Product Descriptions",
    id: 1,
    icon: "",
    category: "Product tool",
    endPoint: "productDescription",
    toneRequired: true,
    brandNameRequired: true,
    descriptionRequired: true,
    brandName: "What is your product called?",
    descriptionName: "Describe your product",
  },
  currentDetailTool: "Product Tools",
  showTools: false,
};

export const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    addSelectedCurrentTool: (state, action: PayloadAction<Tool>) => {
      state.currentTool = action.payload;
      state.showTools = false;
    },
    addCurrentDetailTool: (state, action: PayloadAction<string>) => {
      state.currentDetailTool = action.payload;
      state.showTools = true;
    },
    hideTools: (state) => {
      state.showTools = false;
    },
    resetToolSelections: (state) => {
      state.currentDetailTool = initialState.currentDetailTool;
      state.currentTool = initialState.currentTool;
    },
  },
});

export const {
  addSelectedCurrentTool,
  addCurrentDetailTool,
  resetToolSelections,
  hideTools,
} = toolSlice.actions;

export const selectTool = (state: RootState) => state.tool;

export default toolSlice.reducer;
