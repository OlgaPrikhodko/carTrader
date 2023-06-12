<script setup>
const route = useRoute();
const make = route.params.make;
const cityTitle = toTitleCase(route.params.city);
useHead({
  title: `${make ? toTitleCase(make) : "Cars"} in ${cityTitle}`,
});

definePageMeta({
  layout: "container",
});
</script>

<template>
  <div class="mt-32 flex">
    <CarSideBar />
    <NuxtPage />
  </div>
</template>
