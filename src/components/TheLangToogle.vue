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
  if (locale.value == newLang) return;
  locale.value = newLang;
  localStorage.setItem("default-lang", newLang);
};

onMounted(() => {
  const defaultLocale = localStorage.getItem("default-lang");
  locale.value = defaultLocale;
});
</script>

<template>
  <div>
    <i
      class="bi bi-globe2 text-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 p-1.5 dark:text-gray-50"
      @click="isOpen = !isOpen"
    ></i>
    <transition name="fade-slide">
      <div
        v-show="isOpen"
        class="mt-3 fixed z-50 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 min-w-[200px] animate-pop"
      >
        <div class="flex flex-col gap-2 p-4">
          <div
            v-for="lang in langs"
            :key="lang.code"
            @click="
              switchLang(lang.code);
              isOpen = false;
            "
            :class="{
              'bg-gradient-to-r from-indigo-500 to-purple-500 text-white':
                locale.value === lang.code,
            }"
            class="flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-200 shadow-sm"
          >
            <img v-if="lang.icon" class="w-6 h-6" :src="lang.icon" />
            <span class="tracking-wide text-base font-medium">{{
              lang.label
            }}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
  animation: pop-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
