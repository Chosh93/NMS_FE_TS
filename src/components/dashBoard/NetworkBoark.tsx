import React from "react";
import useSystemInfoStore from "../../zustand/InfoStore";
import "../../style/DashboardCard.css";
import { ArrowRight } from "react-bootstrap-icons";

const NetworkBoard:React.FC = () => {
    const {networkUsage} = useSystemInfoStore();

    return (
        <div className="dashboard-card">
            <div className="dashboard-card-body">
                <div className="card-container">
                <span>Network</span>
                <h4>{networkUsage}%</h4>
                </div>
            </div>
            <div className="card-footer">
                <a className="card-detail" href="#">View Details</a>
                <svg focusable="false"><ArrowRight/></svg>
            </div>
        </div>
    )
}

export default NetworkBoard;