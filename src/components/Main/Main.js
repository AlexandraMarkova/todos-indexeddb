import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';

// import Container from '../Container/Container';
import TodoForm from '../TodoForm/TodoForm';
// import TodoList from './components/TodoList/TodoList'
import Filter from '../TodoFilter/TodoFilter';

import { Dialog } from '@material-ui/core';
import { getTodos } from '../../redux/todos-selectors';
import { getItems } from '../../redux/todos-operations';

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function Main() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const posts = useSelector(getTodos);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper square className={classes.paper}>
          <Typography className={classes.text} variant="h5" gutterBottom>
            <Filter />
          </Typography>

          <List className={classes.list}>
            {posts.map(({ id, title, content, time }) => (
              <React.Fragment key={id}>
                <ListItem button>
                  <ListItemText primary={title} secondary={content} />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper>

        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <Fab
              onClick={handleOpen}
              color="secondary"
              aria-label="add"
              className={classes.fabButton}
            >
              <AddIcon />
            </Fab>

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
          </Toolbar>
        </AppBar>
      </Container>
    </React.Fragment>
  );
}

// import React from 'react';

// import Container from '../Container/Container';
// import TodoForm from '../TodoForm/TodoForm';
// // import TodoList from './components/TodoList/TodoList';

// // import Filter from '../TodoFilter/TodoFilter';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import { Dialog } from '@material-ui/core';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// }));

// const Main = () => {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Container>
//       {/* <textarea id="newmessage"></textarea>
//       <button type="button" onClick={handleOpen}>
//         add
//       </button> */}
//       {/* <Filter /> */}

//       <Fab type="button" onClick={handleOpen} color="primary" aria-label="add">
//         <AddIcon />
//       </Fab>
//       {/* {isLoadingTodos && <h1>Загружаем...</h1>} */}
//       {/* <TodoList /> */}

//       <Dialog
//         className={classes.modal}
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         <TodoForm onSave={handleClose} />
//       </Dialog>
//     </Container>
//   );
// };
// export default Main;
