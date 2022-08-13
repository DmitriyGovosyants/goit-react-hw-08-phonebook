import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
  tagTypes: ['User'],
  keepUnusedDataFor: 30,
  endpoints: builder => ({

    register: builder.mutation({
      query: credentials => ({
        url: '/users/signup',
        method: 'POST',
        body: { ...credentials },
      }),
      invalidatesTags: ['User'],
    }),

    logIn: builder.mutation({
      query: credentials => ({
        url: '/users/login',
        method: 'POST',
        body: { ...credentials },
      }),
      invalidatesTags: ['User'],
    }),
    
  }),
})

export const { useRegisterMutation, useLogInMutation } = authApi;