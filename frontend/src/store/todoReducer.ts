import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type TodoType } from '../types';

export type TodoState = TodoType[];

const initialState: TodoState = [
  {
    id: '0',
    title: 'Wash the car',
    completed: false,
  },
  {
    id: '1',
    title: 'Walk the dog',
    completed: false,
  },
];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.push(action.payload);
    },
    editTodo: (state, action: PayloadAction<TodoType>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);

      state[index].title = action.payload.title;
      state[index].completed = action.payload.completed;
    },
    removeTodo: (state, action: PayloadAction<TodoType['id']>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);

      state.splice(index, 1);
    },
    completeTodo: (state, action: PayloadAction<Omit<TodoType, 'title'>>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);

      state[index].completed = action.payload.completed;
    },
  },
});

export const { addTodo, editTodo, removeTodo, completeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
