import { create } from 'zustand';

const sidebarStore = create((set) =>({
    visible: false,//needs to be false once added menu icon
    toggle: (value) =>
    set((state) => {
        const { visible } = state;
        const newValue = typeof value === "boolean" ? value : !visible;
        return { visible: newValue };
    })
}))

export default sidebarStore;