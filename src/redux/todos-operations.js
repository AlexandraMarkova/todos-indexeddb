import { db } from '../db';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  editTodoRequest,
  editTodoSuccess,
  editTodoError,
} from './todos-actions';

export const getItems = () => async dispatch => {
  dispatch(fetchTodosRequest());

  try {
    let allItems = await db.posts.toArray();
    dispatch(fetchTodosSuccess(allItems));
  } catch (error) {
    console.log('Операция не доступна');
    dispatch(fetchTodosError(error.message));
  }
};

export const addPosts = (postTitle, postContent) => async dispatch => {
  const todo = {
    id: uuidv4(),
    title: postTitle,
    content: postContent,
    time: format(new Date(), 'MM/dd/yyyy/hh:mm:ss'),
  };
  dispatch(addTodoRequest());
  await db.posts.add(todo);
  try {
    dispatch(addTodoSuccess(todo));
  } catch (error) {
    console.log(error.message);
    dispatch(addTodoError(error.message));
  }
};

export const editPosts = (id, title, content, time) => async dispatch => {
  dispatch(editTodoRequest());
  await db.posts.update(id, {
    title,
    content,
    time,
  });

  try {
    dispatch(
      editTodoSuccess({
        id,
        title,
        content,
        time,
      }),
    );
  } catch (error) {
    console.log(error.message);
    dispatch(editTodoError(error.message));
  }
};

export const deletePosts = todoId => async dispatch => {
  dispatch(deleteTodoRequest());
  try {
    await db.posts.delete(todoId);
    dispatch(deleteTodoSuccess(todoId));
  } catch (error) {
    console.log(error.message);
    dispatch(deleteTodoError(error.message));
  }
};
