import React from 'react';
import ReactDOM from 'react-dom/client';
import Equipamentos from './routes/Equipamentos';
import Login from './routes/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="equipamentos" element={<Equipamentos />} />
    </Routes>
  </BrowserRouter>
);
