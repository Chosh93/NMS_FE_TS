import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
import useSystemInfoStore from "../../../zustand/InfoStore";
import { Bar } from "react-chartjs-2";
import MonitorApi from "../../../api/MonitorApi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TotalIssue:React.FC = () => {
  const { cpuIssueCnt, memoryIssueCnt, diskIssueCnt, networkIssueCnt, set} = useSystemInfoStore();

  const chartData = {
    labels: ["CPU", "Memory", "Disk", "Network"],
    datasets: [
      {
        label: "Issue Count",
        data: [cpuIssueCnt, memoryIssueCnt, diskIssueCnt, networkIssueCnt],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        border: 1,
      },
    ],
  };

  return (
      <div>
        <Bar data={chartData}/>
      </div>
  )
}

export default TotalIssue;