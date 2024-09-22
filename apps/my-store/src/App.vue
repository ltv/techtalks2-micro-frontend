<script setup lang="ts">
import Header from "./components/Header.vue";
import Sidebar from "./components/SideBar.vue";
</script>

<template>
  <div class="h-[100vh]">
    <Header />
    <div class="flex w-full h-full">
      <Sidebar />
      <div class="p-4 w-full">
        <router-view />
      </div>
    </div>
  </div>
</template>
