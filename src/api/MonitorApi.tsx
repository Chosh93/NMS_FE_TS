import axios from "axios";

const Domain = "http://localhost:8111";

const MonitorApi = {
    startMonitoring: async() => {
        return await axios.get(Domain + "/start-monitoring");
    },

    systemIssue: async() => {
        return await axios.get(Domain + "/system-issue");
    }
}

export default MonitorApi;