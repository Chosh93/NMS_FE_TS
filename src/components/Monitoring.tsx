import React, { useState, useEffect } from "react";
import MonitorApi from "../api/MonitorApi";

interface MonitoringData {
    cpuUsage: number;
    memoryUsage: number;

}

const Monitoring:React.FC = () => {
    const [monitoringData, setMonitoringData] = useState<MonitoringData>({ cpuUsage: 0, memoryUsage: 0 });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await MonitorApi.startMonitoring();
                setMonitoringData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const interval = setInterval(fetchData, 5000);

        // 컴포넌트가 언마운트될 때 interval을 정리합니다.
        return () => {
            clearInterval(interval);
        };
    }, []);

    return(
        <div>
            <p>cpuUsage : {monitoringData.cpuUsage}</p>
            <p>memoryUsage : {monitoringData.memoryUsage} </p>
        </div>
    )
}

export default Monitoring;