import { configureStore } from "@reduxjs/toolkit";
import { login } from "../features/login/loginSlice";

export const store = configureStore({
  reducer: {
    [login.reducerPath]: login.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(login.middleware),
});
