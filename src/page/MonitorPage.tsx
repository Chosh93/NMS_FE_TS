import React from "react";
import Seconds from "../components/Seconds";
import Monitoring from "../components/Monitoring";
import CpuChart from "../components/CpuChart";
import MemoryChart from "../components/MemoryChart";
import DiskChart from "../components/DisChart";

const MonitorPage:React.FC = () => {


    return (
        <>
        <Seconds/>
        <Monitoring/>
        <div>
            <CpuChart/>
            <MemoryChart/>
            <DiskChart/>
        </div>
        </>
    )
}

export default MonitorPage;