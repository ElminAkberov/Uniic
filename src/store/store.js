import { configureStore } from "@reduxjs/toolkit";
import { emailSend } from "../features/login/loginSlice";

export const store = configureStore({
  reducer: {
    [emailSend.reducerPath]: emailSend.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emailSend.middleware),
});
