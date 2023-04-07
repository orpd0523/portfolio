import { create } from 'zustand';

const darkModeStore = create((set) =>({
    dark: true,
    toggleDarkMode:(value) =>
    set((state) => {
        const { dark } = state;
        const newValue = typeof value === "boolean" ? value : !dark;
        return { dark: newValue }
    })
}))

export default darkModeStore;