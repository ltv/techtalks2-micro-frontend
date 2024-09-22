import { defineStore } from "pinia";

export interface CartItem {
  id: number;
  img: string;
  name: string;
  price: number;
}

export interface CartState {
  items: CartItem[];
}

export const useCartStore = defineStore("Cart", {
  state: (): CartState => ({
    items: [],
  }),
  actions: {
    addItem(item: CartItem) {
      if (this.items.find((i) => i.id === item.id)) {
        return;
      }
      this.items.push(item);
    },
    removeItem(index: number) {
      this.items = this.items.filter((i) => i.id !== index);
    },
    clearCart() {
      this.items = [];
    },
  },
});
