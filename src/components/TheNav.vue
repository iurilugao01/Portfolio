<script setup lang="ts">
import { ref } from "vue";
import type { NavKey } from "../types/interfaces";

defineProps<{
  navs: NavKey[];
}>();

const isOpen = ref(false);
</script>

<template>
  <div class="relative inline-block z-[9999]">
    <i
      class="bi bi-search text-xl p-2 rounded-full border dark:text-white border-gray-300 dark:border-gray-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow hover:scale-110"
      @click="isOpen = !isOpen"
      title="Pesquisar navegação"
    ></i>

    <transition name="fade-slide">
      <div
        v-show="isOpen"
        class="absolute top-full left-0 mt-2.5 z-[9999] w-60 bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden animate-pop backdrop-blur-sm"
      >
        <nav v-if="navs?.length" class="flex flex-col p-3">
          <RouterLink
            v-for="(route, index) in navs"
            class="cursor-default"
            :key="index"
            :to="route.url"
            @click="isOpen = false"
            :class="[
              'flex items-center gap-3 px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200',
              route.active
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                : 'text-gray-800 dark:text-gray-100 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white',
            ]"
          >
            <i v-if="route.icon" class="bi text-lg" :class="route.icon"></i>
            <span class="tracking-wide">{{ route.label }}</span>
          </RouterLink>
        </nav>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.animate-pop {
  animation: pop-in 0.25s ease-out;
}
@keyframes pop-in {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
