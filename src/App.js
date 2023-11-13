import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage/HomePage';
import FlujoRegistro from '../src/pages/FlujoRegistro/FlujoRegistro';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flujo-registro" element={<FlujoRegistro />} />
      </Routes>
    </Router>
  );
};

export default App;
