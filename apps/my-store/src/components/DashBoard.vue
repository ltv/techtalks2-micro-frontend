<template>
  <div>
    <div>
      <h1>Apple Phones</h1>
      <ApplePhones />
    </div>
    <div>
      <h1>Samsung Phones</h1>
      <SamsungPhones />
    </div>
    <div>
      <h1>Nokia Phones</h1>
      <NokiaPhones />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponentWithOptions } from "../utils";
const ApplePhones = defineAsyncComponentWithOptions(
  () => import("apple/Phones.vue")
);
const SamsungPhones = defineAsyncComponentWithOptions(
  () => import("samsung/Phones.vue")
);
const NokiaPhones = defineAsyncComponentWithOptions(
  () => import("nokia/Phones.vue")
);
</script>
