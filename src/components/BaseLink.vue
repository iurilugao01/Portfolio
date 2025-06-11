<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  to: string;
  color?: string;
}>();

defineExpose();

const colorClass = computed(() => {
  switch (props.color) {
    case "pink":
      return "bg-pink-500 hover:bg-pink-600";
    case "emerald":
      return "bg-emerald-500 hover:bg-emerald-600";
    case "red":
      return "bg-red-500 hover:bg-red-600";
    case "black":
      return "bg-black hover:bg-gray-9  00";
    case "indigo":
    default:
      return "bg-indigo-600 hover:bg-indigo-700";
  }
});
</script>

<template>
  <a :href="to" class="block w-full" target="_blank" rel="noopener noreferrer">
    <button
      :class="[
        'w-full py-3 px-6 rounded-xl shadow-md text-white font-semibold text-lg transition duration-300 hover:brightness-110',
        colorClass,
      ]"
    >
      <slot />
    </button>
  </a>
</template>

<style scoped></style>
