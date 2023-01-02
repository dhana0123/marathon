import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface InitialState {
  isLogin: boolean;
}

const getInitialLoginState = () => {
  let login = localStorage.getItem("login");
  if (login) {
    return true;
  }
  return false;
};

// Define the initial state using that type
const initialState: InitialState = {
  isLogin: getInitialLoginState(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.isLogin = true;
    },
    loggedOut: (state) => {
      state.isLogin = false;
      localStorage.clear();
    },
  },
});

export const { loggedIn, loggedOut } = userSlice.actions;

export const selectLogin = (state: RootState) => state.user.isLogin;

export default userSlice.reducer;
