import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from 'redux/contacts/contactsApi';
import { authApi } from "redux/auth/authApi";
import { filterSlice } from "./filter/filterSlice";
import { authSlice } from "./auth/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    filter: filterSlice.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    authApi.middleware,
  ],
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);