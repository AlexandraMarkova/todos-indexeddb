import React from 'react';

const Todo = ({ text, completed, onDelete }) => (
  <>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
    />
    <p className="TodoList__text">{text}</p>
    <button type="button" className="TodoList__btn" onClick={onDelete}>
      Удалить
    </button>
  </>
);

export default Todo;
