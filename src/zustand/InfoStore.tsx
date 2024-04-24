import { create, SetState } from "zustand";

interface SystemState {
    cpuUsage: number;
    memoryFree: number;
    memoryTotal: number;
    diskTotal: number;
    diskUsable: number;
    monitoringActive: boolean;
}

const initialState: SystemState =  {
    cpuUsage: 0,
    memoryFree: 0,
    memoryTotal: 0,
    diskTotal: 0,
    diskUsable: 0,
    monitoringActive: false
}

interface SystemStore extends SystemState {
    set: SetState<SystemState>;
  }

  export const useSystemInfoStore = create<SystemStore>((set) => ({
    ...initialState,
    set: (newState) => set((state) => ({ ...state, ...newState })),
  }));

export default useSystemInfoStore;