<script setup lang="ts">
import { ref } from "vue";
import type { NavKey } from "../types/interface.ts";

const props = defineProps<{
  navs: NavKey[];
}>();

const isOpen = ref(false);
</script>

<template>
  <div>
    <i
      class="bi bi-search rounded-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 p-1.5 border-2 hover:bg-black border-black dark:border-gray-50 dark:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-black dark:hover:border-black"
      @click="isOpen = !isOpen"
    ></i>
    <transition name="fade-slide">
      <div
        v-show="isOpen"
        class="mt-3 absolute z-50 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 min-w-[200px] animate-pop"
      >
        <nav v-if="navs" class="flex flex-col gap-2 p-4">
          <RouterLink
            v-for="(route, index) in navs"
            :key="index"
            :to="route.url"
            @click="isOpen = false"
            :class="{
              'bg-gradient-to-r from-indigo-500 to-purple-500 text-white':
                route.active,
            }"
            class="flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-200 shadow-sm"
          >
            <i v-if="route.icon" class="bi text-lg" :class="route.icon"></i>
            <span class="tracking-wide text-base font-medium">{{
              route.label
            }}</span>
          </RouterLink>
        </nav>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
  animation: pop-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
