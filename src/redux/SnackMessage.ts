import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { AlertColor } from "@mui/material";

// Define a type for the slice state
interface InitialState {
  isModalOpen: boolean;
  message: string;
  messageType: AlertColor;
}

// Define the initial state using that type
const initialState: InitialState = {
  isModalOpen: false,
  message: "",
  messageType: "success",
};

export const snackSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    updateSnack: (state, action: PayloadAction<InitialState>) => {
      state.isModalOpen = action.payload.isModalOpen;
      state.message = action.payload.message;
      state.messageType = action.payload.messageType;
    },
    openSnack: (state) => {
      state.isModalOpen = true;
    },
    closeSnack: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { updateSnack, openSnack, closeSnack } = snackSlice.actions;

export const selectSnackbar = (state: RootState) => state.snackbar;

export default snackSlice.reducer;
