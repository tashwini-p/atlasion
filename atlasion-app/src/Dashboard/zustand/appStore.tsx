import {create} from "zustand";
import { persist } from "zustand/middleware";

interface AppStoreState {
    dopen: boolean;
    updateOpen: (dopen: boolean) => void;
}

const appStore = (set: (fn: (state: AppStoreState) => AppStoreState) => void): AppStoreState => ({
    dopen: true,
    updateOpen: (dopen: boolean) => set((state: AppStoreState) => ({ ...state, dopen })),
});

const persistedAppStore = persist(appStore, { name: "my_app_store" });
export const useAppStore = create(persistedAppStore);