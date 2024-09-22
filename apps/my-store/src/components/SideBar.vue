<template>
  <div class="w-[150px] h-full bg-zinc-900 text-white">
    <ul class="sidebar-menus w-full">
      <template v-for="route in routes" :key="route.path">
        <router-link :to="route.path">
          <li :class="{ 'bg-amber-300': isActive(route.path) }">
            {{ route.name }}
          </li>
        </router-link>
      </template>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import routes from "../router/routes";

const route = useRoute();

const isActive = (path: string) => {
  return route.path === path;
};
</script>
<style scoped lang="scss">
.sidebar-menus {
  list-style-type: none;
  padding: 0;
  li {
    padding: 8px;
    text-align: center;
    text-decoration: none;
    color: white;
    display: block;
  }
}
</style>
