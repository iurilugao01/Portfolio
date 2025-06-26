<script setup lang="ts">
import { computed, ref } from "vue";
import BaseLayout from "../components/BaseLayout.vue";
import TheFooter from "../components/TheFooter.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";

const showMoreProjects = ref(false);
const contacts = [
  {
    label: "Iurilugao01",
    link: "#",
  },
];
const projects = [
  {
    title: "Blog dinamico",
    content1:
      "Foi um projeto frila para um amigo de um amigo meu que queria um Blog personalizavel, seu diferencial de outros blogs e que ele possui uma plataforma de gerenciamento onde basicamente tudo nele é customizavel desde midias, artigos ou até mesmo toda sua pagina introdutoria",
  },
];

const showMoreBtnLabel = computed(() =>
  showMoreProjects.value ? "Mostrar menos" : "Mostrar mais"
);

onMounted(() => {
  AOS.init({ duration: 800, once: true });
});
</script>

<template>
  <div
    class="min-h-screen bg-[url('/background.jpeg')] dark:bg-[url('/darkBackground.jpeg')] bg-center flex items-center justify-center px-4 flex-col"
  >
    <div
      class="w-full max-w-4xl p-10 rounded-3xl shadow-2xl bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm transition-all duration-500"
    >
      <div
        class="flex flex-col items-center justify-center mb-10"
        data-aos="fade-up"
      >
        <img
          src="/me.png"
          class="w-44 h-44 mb-6 drop-shadow-lg rounded-full border-4 border-sky-500 dark:border-sky-300 transition-all duration-300"
          data-aos="zoom-in"
        />
        <h1
          class="text-5xl font-black text-gray-800 dark:text-white mb-4 text-center tracking-tight"
          data-aos="fade-up"
        >
          Desenvolvedor Full Stack
        </h1>
        <p
          class="text-lg text-gray-700 dark:text-gray-300 text-center max-w-xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Explore meus projetos e habilidades.
        </p>
      </div>

      <span
        class="block text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
        asperiores et sint cum ex delectus doloremque repellat obcaecati...
      </span>

      <div class="space-y-10">
        <div data-aos="fade-up" data-aos-delay="300">
          <BaseLayout
            title="Sobre mim"
            content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            content2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>

        <div
          class="flex items-center justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <i
            class="bi bi-briefcase text-4xl text-sky-600 dark:text-sky-300 animate-bounce"
          ></i>
          <span class="text-4xl font-extrabold text-gray-900 dark:text-white">
            Projetos
          </span>
        </div>

        <div
          v-for="(project, index) in projects"
          data-aos="fade-up"
          data-aos-delay="500"
          :key="index"
          v-show="index < 3 || showMoreProjects"
        >
          <BaseLayout :title="project.title" :content1="project.content1" />
        </div>
        <button
          v-if="projects.length > 3"
          @click="showMoreProjects = !showMoreProjects"
          class="dark:text-white ml-3"
        >
          {{ showMoreBtnLabel }}
        </button>
      </div>
    </div>
  </div>
  <TheFooter :contactInfo="contacts" class="" />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap");

* {
  font-family: "Inter", sans-serif;
}
</style>
