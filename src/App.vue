<script setup lang="ts">
import { RouterLink } from "vue-router";
import TheTopBar from "./components/TheTopBar.vue";

const navs = [
  {
    label: "Inicio",
    url: "/",
    icon: "bi-house",
  },
  {
    label: "Links",
    url: "/links",
    icon: " bi-link-45deg",
  },
  {
    label: "Curriculo",
    url: "/about",
    icon: "bi-file-earmark-text",
  },
];
</script>

<template>
  <TheTopBar header="Iuri Lugão" :navs="navs" />
  <RouterView />
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css");
</style>
