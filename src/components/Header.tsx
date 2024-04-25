import React from "react";
import Monitoring from "./Monitoring";
import "../style/Header.css";

const Header:React.FC = () => {

    return (
        <div className="container">
            <h1>Monitoring</h1>
            <Monitoring />
        </div>
    )
}

export default Header;