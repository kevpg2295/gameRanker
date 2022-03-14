import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const actLogin = (token, callback) => (dispatch) => {
  dispatch(login(token));
  if (callback) {
    callback();
  }
};

export const actLogout = (callback) => (dispatch) => {
  dispatch(logout());
  if (callback) {
    callback();
  }
};

export default authSlice.reducer;
