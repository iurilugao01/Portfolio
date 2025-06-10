<script setup lang="ts">
import { RouterLink } from "vue-router";
import TheThemeToggle from "./TheThemeToggle.vue";
import TheNav from "./TheNav.vue";

const props = defineProps<{
  header: string;
  navs: NavKey[];
}>();
</script>

<template>
  <header class="w-full bg-white dark:bg-[#0d0d0d] shadow-md z-50">
    <div
      class="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center"
    >
      <div class="flex text-center justify-center gap-4 items-center">
        <h1
          class="text-3xl font-extrabold text-black dark:text-white tracking-tight"
        >
          {{ props.header }}
        </h1>
        <TheNav :navs="navs" />
      </div>
      <div class="flex items-center gap-5">
        <TheThemeToggle />
      </div>
    </div>

    <div
      class="h-3 w-full bg-gradient-to-b from-gray-100 dark:from-[#111827] to-gray-200 dark:to-[#1f2937]"
    ></div>
  </header>
</template>
