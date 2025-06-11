<script setup lang="ts">
import BaseLayout from "../components/BaseLayout.vue";
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-black flex items-center justify-center px-4"
  >
    <div class="w-full max-w-3xl p-10 rounded-3xl transition-all duration-300">
      <div class="flex flex-col items-center justify-center mb-6">
        <img src="/brasil.png" class="mx-auto mb-4" />
        <h1
          class="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-2 text-center"
          style="position: relative; z-index: 10"
        >
          Bem-vindo ao meu portfólio!
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 text-center">
          Explore meus projetos e habilidades abaixo.
        </p>
      </div>
      <span class="text-2xl font-bold text-gray-900 dark:text-gray-50">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
        asperiores et sint cum ex delectus doloremque repellat obcaecati, veniam
        odit dolor repudiandae voluptatem molestias eaque eum beatae magnam sed
        saepe?
      </span>
      <div class="mt-8">
        <BaseLayout
          title="Sobre mim"
          content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          content2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <div class="flex items-center justify-center mt-8 mb-4">
          <i class="bi bi-briefcase text-4xl mr-2 dark:text-white"></i>
          <span class="text-4xl dark:text-white font-bold">Projetos</span>
        </div>
        <BaseLayout
          title="Site de vendas"
          content1="Minhas principais habilidades incluem Vue.js, TypeScript e muito mais."
        />
      </div>
    </div>
  </div>
</template>
