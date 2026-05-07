import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Emergency from './pages/Emergency';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Emergency />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;