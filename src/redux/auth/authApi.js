import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
  tagTypes: ['User'],
  keepUnusedDataFor: 30,
  endpoints: builder => ({

    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),

    addNewUser: builder.mutation({
      query: credentials => ({
        url: '/users/signup',
        method: 'POST',
        body: { ...credentials },
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    })
    
  }),
})

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;