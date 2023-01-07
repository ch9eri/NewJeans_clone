import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PhotoboothPage from './pages/PhotoboothPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photobooth" element={<PhotoboothPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
