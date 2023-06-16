<script setup>
definePageMeta({
  layout: "container",
  middleware: ["auth"],
});
</script>

<template>
  <div class="rounded shadow mt-20">
    <CarMessageCard />
    <CarMessageCard />
    <CarMessageCard />
    <CarMessageCard />
  </div>
</template>
