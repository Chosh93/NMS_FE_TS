import React from "react";
import CpuBoard from "./CpuBoard";
import MemoryBoard from "./MemoryBoard";
import DiskBoard from "./DiskBoard";
import NetworkBoard from "./NetworkBoark";
import Navi from "../Navi";
import "../../style/MainBoard.css";
import CpuLineChart from "../charts/line/CpuLineChart";
import LineAllChart from "../charts/line/LineAllChart";
import TotalIssue from "../charts/bar/TotalIssue";

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
                    <div className="allcharts">
                        <div className="allchart-row">
                            <div className="allchart-col">
                                <div className="allchart-header">
                                    All Chart View
                                </div>
                                <div className="allchart-body">
                                    <LineAllChart/>
                                </div>
                            </div>
                            <div className="issue-col">
                            <div className="allchart-header">
                                    All Issue View
                                </div>
                                <div className="allchart-body">
                                    <TotalIssue/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBoard;