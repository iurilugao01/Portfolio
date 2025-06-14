<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { NavKey } from "../types/interfaces";
import TheThemeToggle from "./TheThemeToggle.vue";
import TheNav from "./TheNav.vue";
import TheLangToogle from "./TheLangToogle.vue";

const props = defineProps<{
  header: string;
  navs: NavKey[];
}>();
</script>

<template>
  <header
    class="w-full bg-white dark:bg-[#0d0d0d] shadow-lg z-50 transition-colors duration-300 relative"
  >
    <div
      class="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center animate-fade-in-down"
    >
      <div class="flex items-center gap-6">
        <RouterLink
          to="/"
          class="text-4xl font-bold tracking-wider text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
        >
          {{ props.header }}
        </RouterLink>
        <TheNav :navs="navs" />
      </div>

      <div class="flex items-center gap-4">
        <TheLangToogle />
        <TheThemeToggle />
      </div>
    </div>

    <div
      class="h-1 w-full sticky bg-gradient-to-r from-indigo-400 via-pink-400 to-red-400 dark:from-indigo-600 dark:via-pink-500 dark:to-red-500 animate-gradient-x"
    ></div>
  </header>
</template>

<style scoped>
@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient-x {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.6s ease-out forwards;
}

.animate-gradient-x {
  background-size: 200% 100%;
  animation: gradient-x 4s ease infinite;
}
</style>
