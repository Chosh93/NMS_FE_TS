import React from "react";
import useSystemInfoStore from "../../zustand/InfoStore";
import { Link } from "react-router-dom";
import "../../style/DashboardCard.css";
import { ArrowRight } from "react-bootstrap-icons";

const DiskBoard:React.FC = () => {
    const {diskUsage} = useSystemInfoStore();

    return (
        <div className="dashboard-card">
            <div className="dashboard-card-body">
                <div className="card-container">
                <span>Disk</span>
                <h4>{diskUsage}%</h4>
                </div>
            </div>
            <div className="card-footer">
                <Link className="card-detail" to="/disk">View Details</Link>
                <svg focusable="false"><ArrowRight/></svg>
            </div>
        </div>
    )
}

export default DiskBoard;