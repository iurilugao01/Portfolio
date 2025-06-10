<script setup lang="ts">
import BaseLink from "../components/BaseLink.vue";
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center px-4"
  >
    <div
      class="w-full max-w-3xl p-10 rounded-3xl shadow-2xl bg-gray-950/90 backdrop-blur-md transition-all duration-300"
    >
      <div class="flex flex-col items-center justify-center gap-10">
        <h1
          class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-red-400 tracking-wide animate-fade-in"
        >
          Links
        </h1>

        <div class="flex flex-col gap-4 w-full max-w-sm animate-slide-up">
          <BaseLink to="/events" color="red">🎉 Eventos</BaseLink>
          <BaseLink to="/media" color="emerald">📸 Mídia</BaseLink>
          <BaseLink to="/news" color="indigo">📰 Novidades</BaseLink>
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
