import React, { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import useSystemInfoStore from "../../zustand/InfoStore";
import "../../style/LineChart.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineAllChart: React.FC = () => {
    const { cpuUsage, memoryTotal, memoryFree, diskTotal, diskUsable } = useSystemInfoStore();
    
    const memoryUsage = 100 - Math.round(memoryFree/memoryTotal*100);
    const diskUsage = 100 - Math.round(diskUsable/diskTotal*100);

    const [combinedChartData, setCombinedChartData] = useState({
        labels: ["60초전", "55초전", "50초전", "45초전", "40초전", "35초전", "30초전", "25초전", "20초전", "15초전", "10초전", "5초전"],
        datasets: [
            {
                label: "CPU",
                data: Array.from({ length: 12 }, () => 0),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Memory",
                data: Array.from({ length: 12 }, () => 0),
                borderColor: "rgb(54, 162, 235)",
                backgroundColor: "rgba(54, 162, 235, 0.5)",
            },
            {
                label: "Disk",
                data: Array.from({ length: 12 }, () => 0),
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.5)",
            }
        ]
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCombinedChartData(prevData => ({
                labels: prevData.labels,
                datasets: [
                    {
                        ...prevData.datasets[0],
                        data: [...prevData.datasets[0].data.slice(1), cpuUsage],
                    },
                    {
                        ...prevData.datasets[1],
                        data: [...prevData.datasets[1].data.slice(1), memoryUsage],
                    },
                    {
                        ...prevData.datasets[2],
                        data: [...prevData.datasets[2].data.slice(1), diskUsage],
                    }
                ]
            }));
        }, 4500);

        return () => clearInterval(interval);
    }, [cpuUsage, memoryUsage, diskUsage]);

    const options: ChartOptions<'line'> = {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 100
            }
        }
    };

    return (
        <div className="line-chart">
            <Line data={combinedChartData} options={options} />
        </div>
    );
};

export default LineAllChart;
