import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { todosAPI } from './services/todos';
import { usersAPI } from './services/users';
import todoReducer from './todoReducer';

const middlewaresArr = [todosAPI.middleware, usersAPI.middleware];

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    [todosAPI.reducerPath]: todosAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewaresArr),
});

setupListeners(store.dispatch);
