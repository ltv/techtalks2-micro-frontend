<template>
  <div
    class="flex w-full h-[80px] bg-red-500 px-16 justify-between items-center"
  >
    <router-link to="/"><h1 class="text-white">My Store</h1></router-link>
    <div class="flex items-center">
      <router-link to="/cart">
        <span class="text-white">Cart</span>
        <span class="text-white ml-2"
          >{{ items.length + ": " + total + " VND" }}
        </span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "cart/cart";

const cartStore = useCartStore();

const items = computed<any[]>(() => {
  return cartStore.items;
});

const total = computed(() => {
  return items.value.reduce((acc, item) => acc + item.price, 0);
});
</script>
