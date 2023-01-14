import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { stat } from "fs";

export type Project = {
  id: string;
  name: string;
  toolsUsed: string[];
  productName: string;
  tone: string;
  description: string;
  user: string;
  liked?: {
    id: string;
    text: string;
  }[];
  createdAt: string;
  updatedAt: string;
} & {
  createNewProjectModal: boolean;
};

// Define the initial state using that type
const initialState: Project = {
  id: "",
  name: "",
  toolsUsed: [],
  productName: "",
  description: "",
  tone: "",
  user: "",
  liked: [],
  createdAt: "",
  updatedAt: "",
  createNewProjectModal: false,
};

type AddProjectPayload = {
  _id: string;
  name: string;
  toolsUsed: string[];
  productName?: string;
  description?: string;
  tone?: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  liked?: {
    id: string;
    text: string;
  }[];
};

type ContentPayload = {
  productName?: string;
  description?: string;
  tone?: string;
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
      if (action.payload.productName)
        state.productName = action.payload.productName;
      if (action.payload.description)
        state.description = action.payload.description;
      if (action.payload.tone) state.tone = action.payload.tone;
      if (action.payload.liked) state.liked = action.payload.liked;
    },
    addContent: (state, action: PayloadAction<ContentPayload>) => {
      if (action.payload.productName)
        state.productName = action.payload.productName;
      if (action.payload.description)
        state.description = action.payload.description;
      if (action.payload.tone) state.tone = action.payload.tone;
    },
    addLike: (state, action: PayloadAction<{ id: string; text: string }>) => {
      state.liked = state.liked?.filter((obj) => obj.id !== action.payload.id);
      state.liked?.push(action.payload);
    },
    removeLike: (state, action: PayloadAction<string | undefined>) => {
      state.liked = state.liked?.filter((obj) => obj.id !== action.payload);
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
    openNewProjectModal: (state) => {
      state.createNewProjectModal = true;
    },
    closeNewProjectModal: (state) => {
      state.createNewProjectModal = false;
    },
  },
});

export const {
  addProject,
  updageProjectName,
  clearProject,
  openNewProjectModal,
  closeNewProjectModal,
  addContent,
  addLike,
  removeLike,
} = projectSlice.actions;
export const selectProject = (state: RootState) => state.project;
export const selectProjectModal = (state: RootState) =>
  state.project.createNewProjectModal;

export default projectSlice.reducer;
