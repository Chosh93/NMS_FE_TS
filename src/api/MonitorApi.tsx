import axios from "axios";

const Domain = "http://localhost:8111";

const MonitorApi = {
    startMonitoring: async() => {
        return await axios.get(Domain + "/start-monitoring");
    },

    systemIssue: async() => {
        return await axios.get(Domain + "/system-issue");
    },

    cpuInfo: async() => {
        return await axios.get(Domain + "/cpu-info");
    }
}

export default MonitorApi;