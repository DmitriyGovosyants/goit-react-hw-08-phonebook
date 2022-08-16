import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
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
    }),

    updateContact: builder.mutation({
      query: body => ({
        url: `/contacts/${body.id}`,
        method: 'PATCH',
        body: {
          name: body.name,
          number: body.number,
        },
      }),
      invalidatesTags: ['Contacts'],
    })
    
  }),
})

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation, useUpdateContactMutation } = contactsApi;