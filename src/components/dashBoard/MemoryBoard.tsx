import React from "react";
import useSystemInfoStore from "../../zustand/InfoStore";
import "../../style/DashboardCard.css";
import { ArrowRight } from "react-bootstrap-icons";

const MemoryBoard:React.FC = () => {
    const {memoryTotal, memoryFree} = useSystemInfoStore();
    const memoryUsage = 100 - Math.round(memoryFree/memoryTotal*100);

    return (
        <div className="dashboard-card">
            <div className="dashboard-card-body">
                <div className="card-container">
                <span>Memory</span>
                <h4>{memoryUsage}%</h4>
                </div>
            </div>
            <div className="card-footer">
                <a className="card-detail" href="#">View Details</a>
                <svg focusable="false"><ArrowRight/></svg>
            </div>
        </div>
    )
}

export default MemoryBoard;