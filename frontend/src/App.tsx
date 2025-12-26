import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';

import LanguageWrapper from './wrappers/LanguageWrapper';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LanguageWrapper />} />
        <Route path="/:lang/*" element={<LanguageWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
