import React, { useState, useContext, useCallback, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Context from '../../AppContext';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { editPosts } from '../../redux/todos-operations';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  input: {
    display: 'block',
    width: '100%',
  },
  text: {
    width: '100%',
  },
}));

const TodoEditor = () => {
  const dispatch = useDispatch();
  const { postTitle, postContent, id, toggleEditorOpen, getActiveTodo } =
    useContext(Context);

  const [title, setTitle] = useState(postTitle);
  const [content, setContent] = useState(postContent);

  const classes = useStyles();

  const closeTodo = () => {
    getActiveTodo(title, content);
    toggleEditorOpen();
  };

  const updatePost = (id, title, content) => {
    const time = format(new Date(), 'MM/dd/yyyy/hh:mm:ss');
    dispatch(editPosts(id, title, content, time));
  };

  const editPost = useCallback(
    _.debounce((id, title, content) => updatePost(id, title, content), 600),
    [title, content],
  );

  useEffect(() => {
    editPost(id, title, content);
  }, [title, content]);

  const updateTitle = ({ currentTarget }) => {
    setTitle(currentTarget.value);
  };

  const updateContent = ({ currentTarget }) => {
    setContent(currentTarget.value);
  };

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <Input
          className={classes.input}
          inputProps={{ 'aria-label': 'description' }}
          name="title"
          value={title}
          onChange={updateTitle}
        />

        <TextField
          className={classes.text}
          id="outlined-multiline-static"
          multiline
          rows={4}
          variant="outlined"
          name="content"
          value={content}
          onChange={updateContent}
        />
      </form>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={closeTodo}
      >
        Back
      </Button>
    </>
  );
};

export default TodoEditor;
