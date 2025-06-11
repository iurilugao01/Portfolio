<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    titlePosition?: "left" | "mid" | "right";
    layout?: 1 | 2 | 3;
    content1: string;
    content2?: string;
    img?: string;
    imgAlt?: string;
    imgSize?: "lg" | "md" | "sm";
  }>(),
  {
    content2: "",
    img: "",
    imgAlt: "",
    imgSize: "md",
    layout: 1,
    titlePosition: "left",
  }
);
</script>

<template>
  <div
    class="p-10 w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-black dark:text-white mb-12"
  >
    <div
      :class="{
        'text-left': titlePosition === 'left',
        'text-center': titlePosition === 'mid',
        'text-right': titlePosition === 'right',
      }"
      class="mb-6"
    >
      <h2 class="text-3xl font-bold">{{ props.title }}</h2>
    </div>

    <div
      class="flex flex-col lg:flex-row gap-8 items-start"
      :class="{
        'lg:flex-row': layout === 1,
        'lg:flex-row-reverse': layout === 2,
        'lg:flex-col': layout === 3,
      }"
    >
      <div
        class="flex-1 grid gap-4"
        :class="content2 ? 'md:grid-cols-2' : 'grid-cols-1'"
      >
        <p class="text-lg">{{ content1 }}</p>
        <p v-if="content2" class="text-lg">{{ content2 }}</p>
      </div>

      <div v-if="img" class="flex-shrink-0">
        <img
          :src="img"
          :alt="imgAlt"
          class="rounded-lg object-cover"
          :class="{
            'w-96': imgSize === 'lg',
            'w-64': imgSize === 'md',
            'w-32': imgSize === 'sm',
          }"
        />
      </div>
    </div>
  </div>
</template>
