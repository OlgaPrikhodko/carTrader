<script setup>
import heartFilled from "@/assets/heartFilled.png";
import heartOutline from "@/assets/heartOutline.png";

const config = useRuntimeConfig();
const props = defineProps({ car: Object, favored: Boolean });

const emit = defineEmits(["favor"]);
</script>

<template>
  <div
    class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
  >
    <img
      class="absolute w-7 right-5 top-2 z-20"
      :src="favored ? heartFilled : heartOutline"
      alt="heart for adding to favorites"
      @click="emit('favor', car.id)"
    />
    <div class="flex h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
      <NuxtImg
        :src="`${config.public.supabase.url}/storage/v1/object/public/images/${car.image}`"
        alt=""
        class="w-[300px] h-full"
      />
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
