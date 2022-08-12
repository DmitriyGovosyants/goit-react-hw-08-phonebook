import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62ea81eb3a5f1572e87d5280.mockapi.io' }),
  tagTypes: ['Contacts'],
  keepUnusedDataFor: 30,
  endpoints: builder => ({

    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body,
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