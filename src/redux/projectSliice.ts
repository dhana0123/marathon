import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export type Project = {
  id: string;
  name: string;
  toolsUsed: string[];
  user: string;
  createdAt: string;
  updatedAt: string;
};

// Define the initial state using that type
const initialState: Project = {
  id: "",
  name: "",
  toolsUsed: [],
  user: "",
  createdAt: "",
  updatedAt: "",
};

type AddProjectPayload = {
  _id: string;
  name: string;
  toolsUsed: string[];
  user: string;
  createdAt: string;
  updatedAt: string;
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<AddProjectPayload>) => {
      state.id = action.payload._id;
      state.name = action.payload.name;
      state.user = action.payload.user;
      state.toolsUsed = action.payload.toolsUsed;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
    },
    updageProjectName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    clearProject: (state) => {
      state.id = "";
      state.name = "";
      state.user = "";
      state.toolsUsed = [];
      state.createdAt = "";
      state.updatedAt = "";
    },
  },
});

export const { addProject, updageProjectName, clearProject } =
  projectSlice.actions;
export const selectProject = (state: RootState) => state.project;

export default projectSlice.reducer;
