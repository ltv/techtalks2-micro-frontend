<template>
  <div class="h-full">
    <div
      v-if="items.length > 0"
      class="flex flex-col justify-center items-center"
    >
      <div class="flex justify-center items-center">
        <template v-for="item in items" :key="item.id">
          <div class="flex flex-col justify-center items-center m-2">
            <div class="w-[50px]"><img :src="item.img" /></div>
            {{ item.name }} - {{ item.price }}
            <button @click="removeItem(item.id)">Remove</button>
          </div>
        </template>
      </div>

      <p>Total: {{ total }}</p>
      <button @click="clearCart">Clear Cart</button>
    </div>
    <div v-else class="h-full flex justify-center items-center">
      <p>Cart is empty</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();

const items = computed(() => {
  return cartStore.items;
});

const total = computed(() => {
  return items.value.reduce((acc, item) => acc + item.price, 0);
});

const removeItem = (id: number) => {
  cartStore.removeItem(id);
};

const clearCart = () => {
  cartStore.clearCart();
};
</script>
