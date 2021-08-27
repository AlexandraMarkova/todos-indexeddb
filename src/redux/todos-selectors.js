import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.loading;

export const getError = state => state.error;

export const getTodos = state => state.todos;

export const getTodoId = id =>
  createSelector([getTodos], allTodos => {
    const todo = allTodos.find(todo => todo.id === id);
    return todo.id;
  });

export const getFilter = state => state.filter;

export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    const normalizeFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.title.toLowerCase().includes(normalizeFilter),
    );
  },
);
