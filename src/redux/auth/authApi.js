import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token !== null) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
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

    logOut: builder.mutation({
      query: body => ({
        url: '/users/logout',
        method: 'POST',
        body
      }),
      invalidatesTags: ['User'],
    }),

    getCurrentUser: builder.query({
      query: () => '/users/current',
      providesTags: ['User'],
    }),
    
  }),
})

export const { useRegisterMutation, useLogInMutation, useLogOutMutation, useGetCurrentUserQuery } = authApi;