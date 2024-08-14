import { create } from "zustand";

const store = create((set) => ({
  currency: "usd",
  setCurrency: (newCurrency) =>
    set(() => {
      return {
        ...state,
        currency: newCurrency,
      };
    }),
}));
export default store;
