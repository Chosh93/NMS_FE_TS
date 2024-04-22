import React, { useState, useEffect } from "react";
import MonitorApi from "../api/MonitorApi";

interface MonitoringData {
    cpuCost: number;
}

const Monitoring:React.FC = () => {
    const [monitoringData, setMonitoringData] = useState<MonitoringData>({ cpuCost: 0 });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await MonitorApi.startMonitoring();
                setMonitoringData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const interval = setInterval(fetchData, 3000);

        // 컴포넌트가 언마운트될 때 interval을 정리합니다.
        return () => {
            clearInterval(interval);
        };
    }, []);
    return(
        <div>
            <p>cpu : {monitoringData.cpuCost}</p>
        </div>
    )
}

export default Monitoring;