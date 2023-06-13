<script setup>
const route = useRoute();
const make = route.params.make;

const { toTitleCase } = useUtilities();
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
    <NuxtErrorBoundary>
      <CarSideBar />
      <NuxtPage />

      <template #error="{ error }">
        <div class="text-center mx-auto flex flex-col">
          <h1 class="text-3xl text-red-600 mb-4">
            Sorry, something went wrong
          </h1>
          <code>{{ error }}</code>
          <button
            @click="error.value = null"
            class="text-white bg-blue-400 px-10 py-3 rounded mt-4"
          >
            Go Back
          </button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
