<script setup>
const route = useRoute();
const { cars } = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make,
});

watch(
  () => route.query,
  () => window.location.reload(true)
);
</script>

<template>
  <div>
    <CarCards v-if="cars.length" :cars="cars" />

    <div v-else>
      <h1 class="text-red-600">No Cars Found With Filters</h1>
    </div>
  </div>
</template>
