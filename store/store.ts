import create from 'zustand';

interface AppState {
    sampleState: string;
    setSampleState: (sampleState: string) => void;
    suh: string;
}

export const useStore = create<AppState>((set) => ({
    sampleState: 'suh',
    setSampleState: (sampleState: string) => set({ sampleState }),
}));
