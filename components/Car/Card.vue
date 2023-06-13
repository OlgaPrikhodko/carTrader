<script setup>
const props = defineProps({ car: Object });
</script>

<template>
  <div
    class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
  >
    <div class="flex h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
      <NuxtImg :src="car.url" alt="" class="w-[300px] h-full" />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
          <p class="text-grey-700">{{ car.description }}</p>
        </div>

        <h2 class="mt-auto text-xl">${{ car.price }}</h2>
      </div>
    </div>
  </div>
</template>
