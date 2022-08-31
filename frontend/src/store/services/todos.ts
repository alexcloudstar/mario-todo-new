import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TodoType } from '../../types';

const API_URL = import.meta.env.VITE_API_URL as string;

export const todosAPI = createApi({
  reducerPath: 'todosAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Todo'],

  endpoints: (builder) => ({
    getTodoByUser: builder.query<TodoType[], string>({
      query: (name: string) => `/todos/user/${name}`,
      providesTags: ['Todo'],
    }),
    addTodo: builder.mutation<TodoType, TodoType>({
      query: (payload) => ({
        url: '/todos',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const { useGetTodoByUserQuery, useAddTodoMutation } = todosAPI;
