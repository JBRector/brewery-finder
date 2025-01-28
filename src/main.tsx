import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './pages/Home.tsx';
import BreweryDetail from './pages/BreweryDetail.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:breweryId" element={<BreweryDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
