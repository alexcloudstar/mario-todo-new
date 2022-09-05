import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { UserType } from '../../types';

const API_URL = import.meta.env.VITE_API_URL as string;

export const usersAPI = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['User'],

  endpoints: (builder) => ({
    addUser: builder.mutation<UserType['username'], UserType['username']>({
      query: (payload: UserType['username']) => ({
        url: '/users',
        method: 'POST',
        body: { username: payload },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useAddUserMutation } = usersAPI;
