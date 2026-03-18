import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useGameStore = create(
  persist(
    (set) => ({
      level: "A0",
      stars: 5,
      unlockedLevels: ["A0"],
      progress: 0,

      decreaseStar: () =>
        set((state) => ({
          stars: state.stars > 0 ? state.stars - 1 : 0,
        })),

      resetStars: () => set({ stars: 5 }),

      completeLevel: (level) =>
        set((state) => ({
          unlockedLevels: [...new Set([...state.unlockedLevels, level])],
        })),

      setProgress: (value) => set({ progress: value }),
    }),
    {
      name: "english-adventure-storage",
    }
  )
)