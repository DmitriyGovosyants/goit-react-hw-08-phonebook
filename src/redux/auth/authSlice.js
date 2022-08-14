import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

const initialState = {
  user: {name: null, email: null},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        },
      ).addMatcher(
        authApi.endpoints.logIn.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        },
      ).addMatcher(
        authApi.endpoints.logOut.matchFulfilled,
        (state) => {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
        },
      ).addMatcher(
        authApi.endpoints.getCurrentUser.matchPending,
        (state) => {
          state.isRefreshing = true;
        },
      ).addMatcher(
        authApi.endpoints.getCurrentUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        },
      );
  }
});