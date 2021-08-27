import React from 'react';
import Context from './AppContext';

import SideBar from './components/SideBar/SideBar';
import PrimaryAppBar from './components/PrimaryAppBar/PrimaryAppBar';

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Context.Provider value={{ open, handleOpen, handleClose }}>
      <div className="App">
        <header>
          <div>
            <PrimaryAppBar />
          </div>
        </header>
        <main>
          <SideBar />
        </main>
      </div>
    </Context.Provider>
  );
}
