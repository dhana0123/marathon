import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface InitialState {
  currentSelectedTool: string;
  currentDetailTool: string;
  showTools: boolean;
}

// Define the initial state using that type
const initialState: InitialState = {
  currentSelectedTool: "Product tool",
  currentDetailTool: "Social Media Tools",
  showTools: false,
};

export const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    addSelectedCurrentTool: (state, action: PayloadAction<string>) => {
      state.currentSelectedTool = action.payload;
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
      state.currentDetailTool = "Social Media Tools";
      state.currentSelectedTool = "Product tool";
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
