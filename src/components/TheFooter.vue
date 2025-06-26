<script setup lang="ts">
import type { ContactKey } from "../types/interfaces";
defineProps<{
  contactInfo: ContactKey[];
}>();
</script>

<template>
  <div
    class="h-1 w-full sticky bg-gradient-to-r from-indigo-400 via-pink-400 to-red-400 dark:from-indigo-600 dark:via-pink-500 dark:to-red-500 animate-gradient-x"
  ></div>
  <div class="bg-gray-100 dark:bg-[#0d0d0d] w-full h-32">
    <div class="right-0 flex flex-col items-center justify-center gap-2">
      <span>Contato</span>
      <div v-for="(contact, index) in contactInfo" :key="index">
        <a
          :href="contact.link"
          target="_blank"
          class="text-gray-800 dark:text-gray-100 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
        >
          <i :class="contact.icon" class="mr-2 bi"></i>
          {{ contact.label }}
        </a>
      </div>
    </div>
  </div>
</template>
