<script setup>
definePageMeta({
  layout: "container",
});

const { makes } = useCars();

const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    description: "",
    image: null,
  };
});

const onChangeInput = (data, name) => {
  info.value[name] = data;
};
</script>

<template>
  <div>
    <div>
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>

    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAdSelect
        title="Make *"
        name="make"
        :options="makes"
        @change-input="onChangeInput"
      />
    </div>
  </div>
</template>
