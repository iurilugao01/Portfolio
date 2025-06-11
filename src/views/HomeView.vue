<script setup lang="ts">
import BaseLayout from "../components/BaseLayout.vue";
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-200 dark:from-gray-900 dark:via-gray-950 dark:to-black flex items-center justify-center px-4"
  >
    <div
      class="w-full max-w-4xl p-10 rounded-3xl shadow-2xl bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm transition-all duration-500"
    >
      <div class="flex flex-col items-center justify-center mb-10">
        <img
          src="/brasil.png"
          class="w-24 h-24 mb-6 animate-fade-in drop-shadow-lg"
        />
        <h1
          class="text-5xl font-black text-gray-800 dark:text-white mb-4 text-center tracking-tight animate-fade-in-up"
        >
          Bem-vindo ao meu portfólio!
        </h1>
        <p
          class="text-lg text-gray-700 dark:text-gray-300 text-center max-w-xl animate-fade-in-up delay-150"
        >
          Explore meus projetos e habilidades abaixo.
        </p>
      </div>

      <span
        class="block text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-10 animate-fade-in delay-300"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
        asperiores et sint cum ex delectus doloremque repellat obcaecati...
      </span>

      <div class="space-y-10 animate-fade-in delay-500">
        <BaseLayout
          title="Sobre mim"
          content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          content2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

        <div class="flex items-center justify-center gap-3">
          <i
            class="bi bi-briefcase text-4xl text-sky-600 dark:text-sky-300 animate-bounce"
          ></i>
          <span class="text-4xl font-extrabold text-gray-900 dark:text-white">
            Projetos
          </span>
        </div>

        <BaseLayout
          title="Site de vendas"
          content1="Minhas principais habilidades incluem Vue.js, TypeScript e muito mais."
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap");

* {
  font-family: "Inter", sans-serif;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scale(0.98);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in.delay-150 {
  animation-delay: 0.15s;
}
.animate-fade-in.delay-300 {
  animation-delay: 0.3s;
}
.animate-fade-in.delay-500 {
  animation-delay: 0.5s;
}
</style>
