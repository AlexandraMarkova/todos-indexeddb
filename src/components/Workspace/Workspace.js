import React, { useContext } from 'react';
import TodoEditor from '../TodoEditor/TodoEditor';
import Context from '../../AppContext';

const Workspace = () => {
  const { openEditor, postTitle, postContent } = useContext(Context);
  return (
    <>
      {openEditor ? (
        <TodoEditor />
      ) : (
        <>
          <h2> {postTitle} </h2>
          <p>{postContent}</p>
        </>
      )}
    </>
  );
};

export default Workspace;
