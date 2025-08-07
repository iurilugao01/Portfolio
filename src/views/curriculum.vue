<script setup lang="ts">
import { ref } from "vue";
import { VuePDF } from "@tato30/vue-pdf";

const pdfSrc = ref("../../public/curriculo.pdf");
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-black flex items-center justify-center px-4"
  >
    <div style="height: 100vh">
      <VuePDF :src="pdfSrc" :page="1" style="width: 100%; height: 100%" />
    </div>
  </div>
</template>
