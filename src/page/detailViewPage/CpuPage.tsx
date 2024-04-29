import React, { useEffect } from "react";
import CpuLineChart from "../../components/charts/line/CpuLineChart";
import useSystemInfoStore from "../../zustand/InfoStore";
import Navi from "../../components/Navi";
import "../../style/CpuPageStyle.css";
import MonitorApi from "../../api/MonitorApi";

const CpuPage: React.FC = () => {
    const {cpuModel, cpuCores, monitoringActive, set} = useSystemInfoStore();

    useEffect(() => {
        if(monitoringActive){
            const fetchData = async() => {
                try{
                    const response = await MonitorApi.cpuInfo();
                    console.log(response);
                    set({
                        cpuModel: response.data.cpuModel,
                        cpuCores: response.data.cpuCores
                    })
                } catch (error){
                    console.error("Error fetching data :", error);
                }
            };
            fetchData();
        }
    }, [monitoringActive]);

    return (
        <div className="cpu-container">
            <div className="nav-contents">
                <div className="navi">
                    <Navi/>
                </div>
                <div className="contents">
                    <div className="title">
                        <h1>CPU</h1>
                    </div>
                    <div className="cpuchart">
                    <div className="cpuchart-row">
                        <div className="cpuchart-col">
                            <div className="cpuchart-header">
                                CPU Chart View
                            </div>
                            <div className="cpuchart-body">
                            {monitoringActive ? (
                                <CpuLineChart/>
                            ) : (
                                <h3>Monitoring is not running. </h3>
                            )}
                            </div>
                        </div>
                        <div className="cpuinfo-col">
                        <div className="cpuchart-header">
                                CPU ALL INFO 
                            </div>
                            <div className="cpuchart-body">
                                <div className="cpu-model">{cpuModel}</div>
                                <div className="cpu-cores">{cpuCores}</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CpuPage;