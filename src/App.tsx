import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './page/HomePage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
