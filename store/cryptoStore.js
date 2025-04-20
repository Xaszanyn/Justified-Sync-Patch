import { create } from "zustand";

export default create((set) => ({
  uid: "false",

  set: (value) => {
    set({ ...value });
  },
}));
