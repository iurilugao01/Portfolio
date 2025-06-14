<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const isOpen = ref(false);
const { locale } = useI18n();

const langs = [
  { icon: "/brasil.png", code: "pt", label: "Português" },
  { icon: "/eua.png", code: "en", label: "English" },
  { icon: "/alemanha.png", code: "de", label: "Deutsch" },
  { icon: "/irlanda.png", code: "ga", label: "Galego" },
];

const switchLang = (newLang: string) => {
  if (locale.value === newLang) return;
  locale.value = newLang;
  localStorage.setItem("default-lang", newLang);
};

onMounted(() => {
  const defaultLocale = localStorage.getItem("default-lang");
  if (defaultLocale) locale.value = defaultLocale;
});
</script>

<template>
  <div class="relative inline-block">
    <i
      class="bi bi-globe2 text-xl p-2 rounded-full border dark:text-white border-gray-300 dark:border-gray-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow hover:scale-110"
      @click="isOpen = !isOpen"
      title="Trocar idioma"
    ></i>

    <transition name="fade-slide">
      <div
        v-show="isOpen"
        class="absolute top-full right-2.5 mt-2 w-60 bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl z-50 overflow-hidden animate-pop backdrop-blur-sm"
      >
        <div class="flex flex-col p-3">
          <div
            v-for="lang in langs"
            :key="lang.code"
            @click="
              switchLang(lang.code);
              isOpen = false;
            "
            :class="[
              'flex items-center gap-3 px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200 ',
              locale === lang.code
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                : 'text-gray-800 dark:text-gray-100 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white',
            ]"
          >
            <img
              v-if="lang.icon"
              :src="lang.icon"
              alt=""
              class="w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600"
            />
            <span class="tracking-wide">{{ lang.label }}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.animate-pop {
  animation: pop-in 0.25s ease-out;
}
@keyframes pop-in {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
