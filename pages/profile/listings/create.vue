<script setup>
definePageMeta({
  layout: "container",
  middleware: ["auth"],
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
    features: "",
    description: "",
    image: null,
  };
});

const onChangeInput = (data, name) => {
  info.value[name] = data;
};

const inputs = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Civic",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2020",
  },

  {
    id: 3,
    title: "Miles *",
    name: "miles",
    placeholder: "10,000",
  },
  {
    id: 5,
    title: "City *",
    name: "city",
    placeholder: "Kyiv",
  },
  {
    id: 6,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "5",
  },
  {
    id: 4,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents",
  },
];
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

      <CarAdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />

      <CarAdTextArea
        title="Description *"
        name="description"
        placeholder=""
        @change-input="onChangeInput"
      />

      <CarAdImage @change-input="onChangeInput" />
    </div>
  </div>
</template>
