import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "../features/Projects/projectSlice";

const store = configureStore({
  reducer: {
    projects: projectSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
