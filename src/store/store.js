import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./features/projectSlice";
import recordReducer from "./features/demoSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    record: recordReducer,
  },
});
