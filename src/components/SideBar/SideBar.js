import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import { Dialog } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Context from '../../AppContext';
import TodoForm from '../TodoForm/TodoForm';
import Workspace from '../Workspace/Workspace';
import { getVisibleTodos } from '../../redux/todos-selectors';
import { getItems } from '../../redux/todos-operations';

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: '100vw',
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 0,
    bottom: 'auto',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    bottom: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  flexBar: {
    display: 'flex',
  },
  leftTodosBar: {
    width: '30%',
    overflow: 'hidden',
  },
  workspace: {
    // zIndex: 2,
    display: 'block',
    overflowX: 'auto',
    padding: theme.spacing(2, 2, 0),
    width: '70%',
  },
  item: {
    overflow: 'hidden',
  },
  listItem: {
    width: '100%',
  },
}));

export default function SideBar() {
  const {
    open,
    handleClose,
    saveId,
    getActiveTodo,
    postTitle,
    postContent,
    postTime,
  } = useContext(Context);
  const dispatch = useDispatch();
  const classes = useStyles();
  const posts = useSelector(getVisibleTodos);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const postInfo = async (id, title, content) => {
    getActiveTodo(title, content);
    saveId(id);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <div className={classes.flexBar}>
          <div className={classes.leftTodosBar}>
            <Dialog
              className={classes.modal}
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <TodoForm onSave={handleClose} />
            </Dialog>

            <div className={classes.grow} />
            {posts.length > 0 ? (
              <Paper square className={classes.paper}>
                <List className={classes.list}>
                  {posts.map(({ id, title, content, time }) => (
                    <React.Fragment key={id}>
                      <ListItem
                        className={classes.listItem}
                        button
                        onClick={() => postInfo(id, title, content)}
                      >
                        <ListItemText
                          className={classes.item}
                          primary={title}
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="p"
                                variant="body2"
                                color="textPrimary"
                              >
                                {content}
                              </Typography>
                              <Typography
                                component="p"
                                variant="body2"
                                color="textPrimary"
                              >
                                {time}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </React.Fragment>
                  ))}
                </List>
              </Paper>
            ) : null}
          </div>
          <div className={classes.workspace}>
            <Workspace
              postTitle={postTitle}
              postContent={postContent}
              postTime={postTime}
            />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
