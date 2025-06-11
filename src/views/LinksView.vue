<script setup lang="ts">
import BaseLink from "../components/BaseLink.vue";
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-black flex items-center justify-center px-4"
  >
    <div
      class="w-full max-w-3xl p-10 rounded-3xl shadow-2xl bg-white/90 dark:bg-gray-950/90 backdrop-blur-md transition-all duration-300"
    >
      <div class="flex flex-col items-center justify-center gap-10">
        <h1
          class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 dark:from-indigo-400 dark:via-pink-400 dark:to-red-400 tracking-wide animate-fade-in"
        >
          Links
        </h1>

        <div class="flex flex-col gap-4 w-full max-w-sm animate-slide-up">
          <BaseLink to="#" color="indigo">
            <i class="bi bi-linkedin"></i>
            Linkedin
          </BaseLink>
          <BaseLink to="https://github.com/iurilugao01" color="black">
            <i class="bi bi-github"></i>
            Github
          </BaseLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out forwards;
}
</style>
