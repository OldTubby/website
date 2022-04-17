import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer';
import Container from './components/Container';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Container>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='resume' element={<Resume />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
