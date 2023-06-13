<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();
const { cars } = useCars();

const car = computed(() => {
  const carId = parseInt(route.params.id);
  return cars.find((car) => car.id === carId);
});
console.log(car);
if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with id ${route.params.id} does not exist`,
  });
}
useHead({ title: toTitleCase(route.params.name) });

definePageMeta({
  layout: "container",
});
</script>

<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>
