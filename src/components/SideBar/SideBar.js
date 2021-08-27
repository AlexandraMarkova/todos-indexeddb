import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Context from '../../AppContext';
import { useContext } from 'react';

import TodoForm from '../TodoForm/TodoForm';
import Workspace from '../Workspace/Workspace';

import { Dialog } from '@material-ui/core';
import { getVisibleTodos } from '../../redux/todos-selectors';
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
    top: 0,
    bottom: 'auto',
  },
  // grow: {
  //   flexGrow: 1,
  // },
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
    flexBasis: '30%',
  },
  workspace: {
    flexBasis: '70%',
    padding: theme.spacing(2, 2, 0),
  },
}));

export default function SideBar() {
  const { open, handleClose } = useContext(Context);
  const dispatch = useDispatch();
  const classes = useStyles();
  const posts = useSelector(getVisibleTodos);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    console.log('TodoList re-render') || (
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
                        <ListItem button>
                          {/* <Card className={classes.root}>
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        `${time}`
                      </Typography>
                      <Typography variant="h5" component="h2">
                        `${title}`
                      </Typography>
                      <Typography variant="body2" component="p">
                        `${content}`
                      </Typography>
                    </CardContent>
                  </Card> */}
                          {/* <ListItemText primary={title} secondary={content} /> */}

                          <ListItemText
                            primary={title}
                            secondary={
                              <div>
                                <p> {content}</p>
                                <p> {time}</p>
                              </div>
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
              <Workspace />
            </div>
          </div>
        </Container>
      </React.Fragment>
    )
  );
}

// import React from 'react';

// import Container from '../Container/Container';
// import TodoForm from '../TodoForm/TodoForm';
// // import TodoList from './components/TodoList/TodoList';

// // import Filter from '../TodoFilter/TodoFilter';
// // import Fab from '@material-ui/core/Fab';
// // import AddIcon from '@material-ui/icons/Add';
// import { Dialog } from '@material-ui/core';

// import { makeStyles } from '@material-ui/core/styles';
// import Context from '../../AppContext';
// import { useContext } from 'react';

// const useStyles = makeStyles(() => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// }));

// const SideBar = () => {
//   const { open, handleClose } = useContext(Context);
//   const classes = useStyles();
//   // const [open, setOpen] = React.useState(false);

//   // const handleOpen = () => {
//   //   setOpen(true);
//   // };

//   // const handleClose = () => {
//   //   setOpen(false);
//   // };

//   return (
//     <Container>
//       {/* <textarea id="newmessage"></textarea>
//       <button type="button" onClick={handleOpen}>
//         add
//       </button> */}
//       {/* <Filter /> */}

//       {/* <Fab type="button" onClick={handleOpen} color="primary" aria-label="add">
//         <AddIcon />
//       </Fab> */}
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
// export default SideBar;
