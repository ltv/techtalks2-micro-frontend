<template>
  <div class="flex justify-center items-center">
    <ul>
      <li v-for="phone in samsungPhones" :key="phone.id">
        <div class="w-[500px] flex m-2 justify-between items-center">
          <div class="w-[80px]">
            <img :src="phone.img" />
          </div>
          {{ phone.name }} - ${{ phone.price }}
          <button @click="addItem(phone)">Add to cart</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "cart/cart";

const cartStore = useCartStore();

const samsungPhones = [
  {
    id: 200,
    name: "Samsung Galaxy S21",
    price: 799,
    img: `https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png`,
  },
  {
    id: 201,
    name: "Samsung Galaxy S21+",
    price: 999,
    img: `https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png`,
  },
  {
    id: 202,
    name: "Samsung Galaxy S21 Ultra",
    price: 1199,
    img: `https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png`,
  },
];

const addItem = (item: { id: number; name: string; price: number }) => {
  cartStore.addItem(item);
};
</script>
