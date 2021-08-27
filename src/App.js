import React from 'react';
import Main from './components/Main/Main';

export default function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h1>Welcome to your To Do list</h1>
        </div>
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
}
