import { create, SetState } from "zustand";

interface SystemState {
    cpuUsage: number;
    memoryFree: number;
    memoryTotal: number;
    memoryUsage: number;
    diskTotal: number;
    diskUsable: number;
    diskUsage: number;
    monitoringActive: boolean;
    cpuIssueCnt: number;
    memoryIssueCnt: number;
    diskIssueCnt: number;
    networkIssueCnt: number;
}

const initialState: SystemState =  {
    cpuUsage: 0,
    memoryFree: 0,
    memoryTotal: 0,
    memoryUsage: 0,
    diskTotal: 0,
    diskUsable: 0,
    diskUsage: 0,
    monitoringActive: false,
    cpuIssueCnt: 0,
    memoryIssueCnt: 0,
    diskIssueCnt: 0,
    networkIssueCnt: 0
}

interface SystemStore extends SystemState {
    set: SetState<SystemState>;
  }

  export const useSystemInfoStore = create<SystemStore>((set) => ({
    ...initialState,
    set: (newState) => set((state) => ({ ...state, ...newState })),
  }));

export default useSystemInfoStore;