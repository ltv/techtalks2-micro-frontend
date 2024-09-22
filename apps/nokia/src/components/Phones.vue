<template>
  <div class="flex justify-center items-center">
    <template v-for="phone in nokiaPhones" :key="phone.id">
      <div class="flex flex-col m-2 items-center">
        <div class="w-[80px]">
          <img :src="phone.img" />
        </div>
        {{ phone.name }} - ${{ phone.price }}
        <button @click="addItem(phone)">+</button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "cart/cart";

const cartStore = useCartStore();
console.log("nokia", import.meta.env["VITE_TEST"]);
const nokiaPhones = [
  {
    id: 100,
    name: "Nokia 8.3",
    price: 699,
    img: `https://images.ctfassets.net/wcfotm6rrl7u/ddqlkk1B1HjBM9jMPbHqz/6e37788971804cbad6095622dcb03e73/nokia-G22-lagoon_blue-front_back-int.png`,
  },
  {
    id: 101,
    name: "Nokia 5.4",
    price: 199,
    img: `https://images.ctfassets.net/wcfotm6rrl7u/ddqlkk1B1HjBM9jMPbHqz/6e37788971804cbad6095622dcb03e73/nokia-G22-lagoon_blue-front_back-int.png`,
  },
  {
    id: 102,
    name: "Nokia 3.4",
    price: 129,
    img: `https://images.ctfassets.net/wcfotm6rrl7u/ddqlkk1B1HjBM9jMPbHqz/6e37788971804cbad6095622dcb03e73/nokia-G22-lagoon_blue-front_back-int.png`,
  },
];

const addItem = (item: { id: number; name: string; price: number }) => {
  cartStore.addItem(item);
};
</script>
