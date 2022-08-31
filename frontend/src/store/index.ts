import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { todosAPI } from './services/todos';
import todoReducer from './todoReducer';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    [todosAPI.reducerPath]: todosAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosAPI.middleware),
});

setupListeners(store.dispatch);
