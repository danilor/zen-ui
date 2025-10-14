import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const useThemeStorage = create((set) => ({
//   theme: 'dark',
//   setTheme: (t: string) => set({ theme: t }),
// }));

const useThemeStorage = create(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (t: string) => set({ theme: t }),
    }),
    {
      name: 'theme_storage', // Required: Unique name for your storage
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useThemeStorage;
