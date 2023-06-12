<script setup>
const route = useRoute();

useHead({ title: toTitleCase(route.params.name) });

definePageMeta({
  layout: "container",
});
</script>

<template>
  <div>
    <CarDetailHero />
    <CarDetailAttributes />
    <CarDetailDescription />
    <CarDetailContact />
  </div>
</template>
