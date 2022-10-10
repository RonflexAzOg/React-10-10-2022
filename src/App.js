import {Routes, Route} from 'react-router-dom'
import React from 'react';

import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;