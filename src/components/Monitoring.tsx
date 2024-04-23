import React, { useEffect } from "react";
import MonitorApi from "../api/MonitorApi";
import useSystemInfoStore from "../zustand/InfoStore";

const Monitoring:React.FC = () => {
    const { cpuUsage, memoryFree, memoryTotal, set } = useSystemInfoStore();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await MonitorApi.startMonitoring();
            set({
              cpuUsage: Math.round(response.data.cpuUsage),
              memoryFree: response.data.memoryFree,
              memoryTotal: response.data.memoryTotal,
              diskTotal: response.data.diskTotal,
              diskUsable: response.data.diskUsable
            });
            console.log(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };

        const interval = setInterval(fetchData, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [set]);

    return(
        <div>
            <p>cpuUsage : {cpuUsage}</p>
            <p>memoryUsage : {100-Math.round(memoryFree/memoryTotal*100)} </p>
        </div>
    )
}

export default Monitoring;