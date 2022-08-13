import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from 'redux/contacts/contactsApi';
import { authApi } from "redux/auth/authApi";
import { filterSlice } from "./filter/filterSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: authSlice.reducer,
    filter: filterSlice.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    authApi.middleware,
  ],
});

setupListeners(store.dispatch);