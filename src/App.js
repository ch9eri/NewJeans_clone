import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
