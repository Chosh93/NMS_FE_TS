import React from "react";
import useSystemInfoStore from "../../zustand/InfoStore";
import "../../style/DashboardCard.css";
import { ArrowRight } from "react-bootstrap-icons";

const DiskBoard:React.FC = () => {
    const {diskTotal, diskUsable} = useSystemInfoStore();
    const diskUsage = 100 - Math.round(diskUsable/diskTotal*100);

    return (
        <div className="dashboard-card">
            <div className="dashboard-card-body">
                <div className="card-container">
                <span>Disk</span>
                <h4>{diskUsage}%</h4>
                </div>
            </div>
            <div className="card-footer">
                <a className="card-detail" href="#">View Details</a>
                <svg focusable="false"><ArrowRight/></svg>
            </div>
        </div>
    )
}

export default DiskBoard;