import React, { useCallback } from 'react';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import IconButton from '@material-ui/core/IconButton';
// import { useDispatch } from 'react-redux';
// import { deletePosts } from '../../redux/todos-operations';

const Workspace = ({ postTitle, postContent, postTime }) => {
  // const dispatch = useDispatch();

  // const deletePost = useCallback(
  //   id => {
  //     dispatch(deletePosts(id));
  //   },
  //   [dispatch],
  // );
  // const deletePost = async id => {
  //   console.log(id);
  //   dispatch(deletePosts(id));
  // };

  return (
    <>
      <h2>{postTitle}</h2>
      <p>{postContent}</p>
      <p>{postTime}</p>
      {/* <button
        type="button"
        className="TodoList__btn"
        onClick={() => deletePost(postTitle)}
      >
        Удалить
      </button> */}
      {/* <IconButton
      key={postTitle}
      aria-label="delete"
      color="inherit"
      onClick={() => deletePost(postTitle)}
    >
      <DeleteForeverIcon />
    </IconButton> */}
    </>
  );
};

export default Workspace;
