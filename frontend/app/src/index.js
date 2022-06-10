import React from 'react';
import ReactDOM from 'react-dom/client';
import Equipamentos from './routes/Equipamentos';
import Login from './routes/Login';
import AddProduto from './routes/AddProduto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="equipamentos" element={<Equipamentos />} />
      <Route path="criarproduto" element={<AddProduto />} />
    </Routes>
  </BrowserRouter>
);
