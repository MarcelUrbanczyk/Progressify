import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../localStorage";

interface task {
  name: string;
  isDone: boolean;
  deadline: Date | undefined;
}

interface projectState {
  creationDate: Date;
  deadline: Date;
  name: string;
  tasks: task[];
  id: string;
}

const projectsSlice = createSlice({
  name: "projects",
  initialState: getFromLocalStorage("projects") as projectState[],
  reducers: {
    addProject: (state, action) => {
      state.push(action.payload);
    },
    removeProject: (state, action) => {
      return state.filter((project) => project.id !== action.payload);
    },
  },
});

export const { addProject, removeProject } = projectsSlice.actions;

export const selectProjects = (state) => state.projects;

export const getProjectById = (state, id) =>
  selectProjects(state).find((project) => project.id === id);

export default projectsSlice.reducer;
