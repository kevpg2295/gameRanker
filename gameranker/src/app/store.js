import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/token/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
