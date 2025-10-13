import { create } from 'zustand'

const useThemeStorage = create((set) => ({
  theme: 'dark',
  setTheme: (t: string) => set({ theme: t }),
}));

export default useThemeStorage;
