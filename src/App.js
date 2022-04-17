import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
