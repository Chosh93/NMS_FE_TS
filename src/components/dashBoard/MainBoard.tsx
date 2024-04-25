import React from "react";
import CpuBoard from "./CpuBoard";
import MemoryBoard from "./MemoryBoard";
import DiskBoard from "./DiskBoard";
import NetworkBoard from "./NetworkBoark";
import Navi from "../Navi";
import "../../App.css";
import CpuChart from "../charts/CpuChart";
import MemoryChart from "../charts/MemoryChart";
import DiskChart from "../charts/DiskChart";
import CpuLineChart from "../charts/CpuLineChart";

const MainBoard:React.FC = () => {

    return (
        <div className="board-container">
            <div className="nav-contents">
                <div className="navi">
                    <Navi/>
                </div>
                <div className="contents">
                    <div className="title">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="simple">
                        <CpuBoard/>
                        <MemoryBoard/>
                        <DiskBoard/>
                        <NetworkBoard/>
                    </div>
                    <div className="donuts-charts">
                        <CpuChart/>
                        <MemoryChart/>
                        <DiskChart/>
                        <CpuChart/>
                    </div>
                    <div className="line-charts">
                        <CpuLineChart/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBoard;