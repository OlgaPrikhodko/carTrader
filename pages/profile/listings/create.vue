<script setup>
definePageMeta({
  layout: "container",
});

const { makes } = useCars();
const user = useSupabaseUser();
const supabase = useSupabaseClient();

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

const errorMessage = ref("");

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
    title: "Price *",
    name: "price",
    placeholder: "3000",
  },
  {
    id: 4,
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
    id: 7,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents",
  },
];

const isButtonDisabled = computed(() => {
  for (let key in info.value) {
    if (!info.value[key]) return true;
  }

  return false;
});

const handleSubmit = async () => {
  const filename = Math.floor(Math.random() * 10000000000000);
  const { data, error } = await supabase.storage
    .from("images")
    .upload(`public/${filename}`, info.value.image);

  if (error) {
    return (errorMessage.value = "Cannot upload image");
  }

  const body = {
    ...info.value,
    features: info.value.features.split(", "),
    numberOfSeats: parseInt(info.value.seats),
    city: info.value.city.toLowerCase(),
    miles: parseInt(info.value.miles),
    price: parseInt(info.value.price),
    year: parseInt(info.value.year),
    name: `${info.value.make} ${info.value.model}`,
    listerId: user.value.id,
    image: data.path,
  };

  delete body.seats;

  try {
    const response = await $fetch("/api/car/listings", {
      method: "post",
      body,
    });
    navigateTo("/profile/listings");
  } catch (error) {
    errorMessage.value = error.statusMessage;
    await supabase.storage.from("images").remove(data.path);
  }
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

      <div>
        <button
          :disabled="isButtonDisabled"
          @click="handleSubmit"
          class="bg-blue-500 text-white rounded py-2 px-7 mt-3"
        >
          Submit
        </button>

        <p v-if="errorMessage" class="text-red-500 mt-3">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>
