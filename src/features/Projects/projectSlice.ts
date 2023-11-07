import { createSlice } from "@reduxjs/toolkit";

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

const initialState: projectState[] = [];

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.push(action.payload);
    },
    removeProject: (state, action) => {
      return state.filter((project) => project.id !== action.payload);
    },
  },
});

export default projectsSlice.reducer;
