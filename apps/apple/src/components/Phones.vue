<template>
  <div class="flex justify-center items-center">
    <template v-for="phone in applePhones" :key="phone.id">
      <div class="flex flex-col m-2 items-center">
        <div class="w-[80px]"><img :src="phone.img" /></div>
        {{ phone.name }} - ${{ phone.price }}
        <button @click="addItem(phone)">+</button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "cart/cart";

const cartStore = useCartStore();

const applePhones = [
  { id: 1, name: "iPhone 13", price: 799, img: "/iphone.jpg" },
  { id: 2, name: "iPhone 13 Pro", price: 999, img: "/iphone.jpg" },
  { id: 3, name: "iPhone 13 Pro Max", price: 1199, img: "/iphone.jpg" },
];

const addItem = (item: { id: number; name: string; price: number }) => {
  cartStore.addItem(item);
};
</script>
