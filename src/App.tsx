import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterView from './RouterView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterView />
      </BrowserRouter>
    </div>
  );
}

export default App;
