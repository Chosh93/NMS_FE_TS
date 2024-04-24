import React from "react";
import { Link } from 'react-router-dom';
import "../style/NaviStyle.css";

const Navi:React.FC = () => {

    return (
        <div className="nav">
          <div className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </div>
          <div className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </div>
          <div className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      );
    };

export default Navi;