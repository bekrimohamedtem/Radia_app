import { create } from "zustand";

const useQpStore = create((set) => ({
  quantity: 1,
  pricePerItem: 1250,
  price: 1250, // prix initial

  // Met à jour la quantité et le prix automatiquement
  setQuantity: (newQuantity) =>
    set((state) => ({
      quantity: newQuantity,
      price: newQuantity * state.pricePerItem,
    })),
}));

export default useQpStore;
