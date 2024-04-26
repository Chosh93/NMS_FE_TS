import React, { useEffect } from "react";
import MonitorApi from "../api/MonitorApi";
import useSystemInfoStore from "../zustand/InfoStore";
import "../style/Header.css";

const Monitoring:React.FC = () => {
  const { monitoringActive, set } = useSystemInfoStore();
  
  useEffect(() => {
    if (monitoringActive) {
      const fetchData = async () => {
        try {
          const response = await MonitorApi.startMonitoring();
          const issueResponse = await MonitorApi.systemIssue();
          console.log(response);
          console.log(issueResponse);
          set({
            cpuUsage: Math.round(response.data.cpuUsage),
            memoryFree: response.data.memoryFree,
            memoryTotal: response.data.memoryTotal,
            memoryUsage: response.data.memoryUsage,
            diskTotal: response.data.diskTotal,
            diskUsable: response.data.diskUsable,
            diskUsage: response.data.diskUsage,
            cpuIssueCnt: issueResponse.data.issueCpuCount,
            memoryIssueCnt: issueResponse.data.issueMemoryCount,
            diskIssueCnt: issueResponse.data.issueDiskCount,
            networkIssueCnt: issueResponse.data.issueNetworkCount
          });

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      const interval = setInterval(fetchData, 4500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [monitoringActive, set]);

  const startMonitoring = () => {
      set({
          monitoringActive: true
      });
  };

  const stopMonitoring = () => {
      set({
          monitoringActive: false
      });
  };

  return(
    <div className="monitoring-btn-container">
      {monitoringActive ? (
        <button onClick={stopMonitoring}>Stop Monitoring</button>
      ) : (
        <button onClick={startMonitoring}>Start Monitoring</button>
      )}
    </div>
  );
};

export default Monitoring;
