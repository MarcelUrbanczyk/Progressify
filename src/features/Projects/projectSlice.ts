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

//const initialState: projectState[] = [];

const initialState: projectState[] = [
  {
    creationDate: new Date(),
    deadline: new Date(),
    name: "test",
    tasks: [{ name: "test", isDone: false, deadline: new Date() }],
    id: "1",
  },
];
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

export const { addProject, removeProject } = projectsSlice.actions;

export default projectsSlice.reducer;
