import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  changeFilter,
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
  editTodoSuccess,
} from './todos-actions';

const todos = createReducer([], {
  [fetchTodosSuccess]: (_, { payload }) => payload,
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [deleteTodoSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [editTodoSuccess]: (state, { payload }) =>
    state.map(item =>
      item.id === payload.id
        ? {
            ...item,
            content: payload.content,
            title: payload.title,
            time: payload.time }
        : item,
    ),
});

const loading = createReducer(false, {
  [fetchTodosRequest]: () => true,
  [fetchTodosSuccess]: () => false,
  [fetchTodosError]: () => false,
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [deleteTodoRequest]: () => true,
  [deleteTodoSuccess]: () => false,
  [deleteTodoError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  todos,
  filter,
  loading,
  error,
});
