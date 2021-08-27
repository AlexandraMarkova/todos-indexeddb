import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { todosSelectors } from '../../redux/todos-selectors';
// import { changeFilter } from '../../redux/todos-selectors';

export default function TodoFilter() {
  //   const dispatch = useDispatch();
  //   const value = useSelector(todosSelectors.getFilter);

  //   const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <div className="TodoFilter">
      <input
        type="text"
        className="TodoFilter__input"
        // value={value}
        // onChange={onChange}
      />
    </div>
  );
}
