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
import useSystemInfoStore from "../../../zustand/InfoStore";
import "../../../style/LineChart.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const CpuLineChart: React.FC = () => {
    const { cpuUsage } = useSystemInfoStore();
    const [chartData, setChartData] = useState({
        labels: ["60초전", "55초전", "50초전", "45초전", "40초전", "35초전", "30초전", "25초전", "20초전", "15초전", "10초전", "5초전"], // 고정된 labels
        datasets: [
            {
                label: "CPU",
                data: Array.from({ length: 12 }, () => 0),
                border: 0.5,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            }
        ]
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const newChartData = {
                labels: chartData.labels,
                datasets: [
                    {
                        ...chartData.datasets[0],
                        data: [...chartData.datasets[0].data.slice(1), cpuUsage],
                    }
                ]
            };
            setChartData(newChartData);
        }, 4500); // 5초마다 실행

        return () => clearInterval(interval);
    }, [cpuUsage, chartData]);

    const options: ChartOptions<'line'> = {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 100
            }
        }
    }
    
    return (
        <div className="line-chart">
            <Line data={chartData} options={options}/>
        </div>
    )
}

export default CpuLineChart;
