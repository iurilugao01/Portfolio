<script setup lang="ts">
import { onMounted, ref } from "vue";

const darkTheme = ref(false);

const toggleTheme = () => {
  if (darkTheme.value) {
    localStorage.removeItem("data-theme");
    document.documentElement.removeAttribute("data-theme");
    darkTheme.value = false;
  } else {
    localStorage.setItem("data-theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    darkTheme.value = true;
  }
};

onMounted(() => {
  darkTheme.value = !!localStorage.getItem("data-theme");
  if (darkTheme.value)
    document.documentElement.setAttribute("data-theme", "dark");
});
</script>

<template>
  <div class="w-12 h-12 flex items-center justify-center" @click="toggleTheme">
    <svg
      :class="[
        'transition-transform duration-700 ease-in-out w-8 h-8 text-yellow-400 dark:text-white hover:scale-150',
        darkTheme ? 'rotate-180' : 'rotate-0',
      ]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        v-if="!darkTheme"
        fill-rule="evenodd"
        d="M12 4.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V5.25A.75.75 0 0112 4.5zm5.657 1.343a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06zM12 18a6 6 0 100-12 6 6 0 000 12zm7.5-6a.75.75 0 010 1.5h-1.5a.75.75 0 010-1.5h1.5zM5.25 12a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5h1.5zm1.987-5.157a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM12 18.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zm6.657-1.593a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0z"
        clip-rule="evenodd"
      />
      <path
        v-else
        fill-rule="evenodd"
        d="M17.293 6.707a8 8 0 11-9.586 9.586 7 7 0 109.586-9.586z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>
