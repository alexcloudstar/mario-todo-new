import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TodoType } from '../../types';

const API_URL = import.meta.env.VITE_API_URL as string;

type MUTATION_ARGS = {
  id: TodoType['id'];
  title?: string;
  authorUsername: TodoType['authorUsername'];
  isCompleted: TodoType['isCompleted'];
};

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
      query: (payload: TodoType) => ({
        url: '/todos',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Todo'],
    }),
    updateTodo: builder.mutation<MUTATION_ARGS, MUTATION_ARGS>({
      query: ({ id, title, authorUsername, isCompleted }: MUTATION_ARGS) => ({
        url: `/todos/${id || ''}`,
        method: 'PUT',
        body: { title, authorUsername, isCompleted },
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation<
      Omit<MUTATION_ARGS, 'isCompleted' | 'title'>,
      Omit<MUTATION_ARGS, 'isCompleted' | 'title'>
    >({
      query: ({
        id,
        authorUsername,
      }: Omit<MUTATION_ARGS, 'isCompleted' | 'title'>) => ({
        url: `/todos/${id || ''}`,
        method: 'DELETE',
        body: { authorUsername },
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useGetTodoByUserQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todosAPI;
