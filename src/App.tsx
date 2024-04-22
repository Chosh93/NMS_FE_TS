import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './page/HomePage';
import MonitorPage from './page/MonitorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/monitor" element={<MonitorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
