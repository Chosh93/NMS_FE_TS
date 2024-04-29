import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './page/HomePage';
import Header from './components/Header';
import CpuPage from './page/detailViewPage/CpuPage';
import MemoryPage from './page/detailViewPage/MemoryPage';
import DiskPage from './page/detailViewPage/DiskPage';
import NetworkPage from './page/detailViewPage/NetworkPage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cpu" element={<CpuPage />} />
        <Route path="/memory" element={<MemoryPage />} />
        <Route path="/disk" element={<DiskPage />} />
        <Route path="/network" element={<NetworkPage />} />
      </Routes>
    </Router>
  );
}

export default App;
