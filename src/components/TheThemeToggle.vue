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
  <i
    class="bi cursor-pointer text-3xl dark:text-yellow-300"
    :class="{
      'bi-brightness-high-fill': !darkTheme,
      'bi-brightness-high': darkTheme,
    }"
    @click="toggleTheme()"
  ></i>
</template>
