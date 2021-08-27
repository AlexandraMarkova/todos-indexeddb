import { createAction } from '@reduxjs/toolkit';

export const fetchTodosRequest = createAction('todos/fetchTodosRequest');
export const fetchTodosSuccess = createAction('todos/fetchTodosSuccess');
export const fetchTodosError = createAction('todos/fetchTodosError');

export const addTodoRequest = createAction('todos/addTodoRequest');
export const addTodoSuccess = createAction('todos/addTodoSuccess');
export const addTodoError = createAction('todos/addTodoError');

export const deleteTodoRequest = createAction('todos/deleteTodoRequest');
export const deleteTodoSuccess = createAction('todos/deleteTodoSuccess');
export const deleteTodoError = createAction('todos/deleteTodoError');

export const editTodoRequest = createAction('todos/editTodoRequest');
export const editTodoSuccess = createAction('todos/editeTodoSuccess');
export const editTodoError = createAction('todos/editTodoError');

export const changeFilter = createAction('todos/changeFilter');
