import {Routes, Route} from 'react-router-dom';
import React from 'react';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Exercice from './pages/Exercice';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/exercice' element={<Exercice/> } />
      </Routes>
    </>
  );
}

export default App;