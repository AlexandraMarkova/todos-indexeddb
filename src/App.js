import React, { useState } from 'react';
import Context from './AppContext';

import SideBar from './components/SideBar/SideBar';
import PrimaryAppBar from './components/PrimaryAppBar/PrimaryAppBar';
import { useDispatch } from 'react-redux';
import { deletePosts } from './redux/todos-operations';
import { Dialog } from '@material-ui/core';
import { Button } from '@material-ui/core';

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(null);
  const [postTitle, setTitle] = useState('');
  const [postContent, setContent] = useState('');
  const [postTime, setPostTime] = useState('');
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const dispatch = useDispatch();

  const saveId = id => {
    setId(id);
  };
  const getActiveTodo = (title, content, time) => {
    setTitle(title);
    setContent(content);
    setPostTime(time);
  };

  const deletePost = id => {
    console.log(id);
    dispatch(deletePosts(id));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const togleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  const handleDelete = id => {
    dispatch(deletePosts(id));

    setTitle('');
    setContent('');
    setPostTime('');
    togleOpenDeleteModal();
  };

  return (
    <Context.Provider
      value={{
        open,
        id,
        saveId,
        postTitle,
        postContent,
        postTime,
        handleOpen,
        handleClose,
        deletePost,
        getActiveTodo,
        togleOpenDeleteModal,
      }}
    >
      <div className="App">
        <header>
          <PrimaryAppBar />
        </header>
        <main>
          <SideBar />
        </main>
        <Dialog
          // className={classes.modal}
          open={openDeleteModal}
          onClose={togleOpenDeleteModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <p> You really want delete this ToDo?</p>
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={togleOpenDeleteModal}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={() => handleDelete(id)}
          >
            Ok
          </Button>
        </Dialog>
      </div>
    </Context.Provider>
  );
}
