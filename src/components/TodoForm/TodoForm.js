import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import { addPosts } from '../../redux/todos-operations';

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 300,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '27ch',
    },
  },
}));

export default function TodoForm({ onSave }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postTitle, setTitle] = useState('');
  const [postContent, setContent] = useState('');

  const titleChange = useCallback(e => {
    setTitle(e.currentTarget.value);
  }, []);

  const contentChange = useCallback(e => {
    setContent(e.currentTarget.value);
  }, []);

  const getPostInfo = async event => {
    event.preventDefault();
    if (postTitle !== '' && postContent !== '') {
      try {
        await dispatch(addPosts(postTitle, postContent));
        onSave();
        setTitle('');
        setContent('');
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  return (
    <div className={classes.paper}>
      <form
        onSubmit={getPostInfo}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Add Title"
          variant="outlined"
          value={postTitle}
          onChange={titleChange}
        />
        <TextField
          id="outlined-basic"
          label="Add Content"
          variant="outlined"
          value={postContent}
          onChange={contentChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Save todo
        </Button>
      </form>
    </div>
  );
}
