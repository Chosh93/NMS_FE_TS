import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useSystemInfoStore from "../../zustand/InfoStore";

ChartJS.register(ArcElement, Tooltip, Legend);

const CpuChart: React.FC = () => {
    const { cpuUsage } = useSystemInfoStore(); // cpuUsage와 memoryUsage 값 가져오기

    const data = {
        labels: ['사용중', '사용가능'],
        datasets:[
            {
                data: [cpuUsage, 100-cpuUsage], // cpuUsage와 memoryUsage 값을 차트 데이터에 사용
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            }
        ]
    };

    const chartOptions = {
        responsive: true, // 차트 크기를 반응형으로 조정
        maintainAspectRatio: false, // 차트가 부모 요소의 크기에 맞추도록 설정
    };

    return (
        <div style={{ width: '300px', height: '300px' }}>
            <Doughnut data={data} options={chartOptions}/> 
        </div>
    )
}

export default CpuChart;