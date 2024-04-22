import axios from "axios";

const Domain = "http://localhost:8111";

const MonitorApi = {
    startMonitoring: async() => {
        return await axios.get(Domain + "/start-monitoring");
    }
}

export default MonitorApi;