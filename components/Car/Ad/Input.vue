<script setup>
const props = defineProps({
  name: String,
  title: String,
  placeholder: String,
});

const state = ref("");
const emits = defineEmits(["changeInput"]);
const onChange = () => {
  emits("changeInput", state.value, props.name);
};
</script>
<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label for="" class="text-cyan-500 text-sm">{{ title }}</label>

    <input
      type="text"
      class="p-2 border w-100 rounded"
      :name="name"
      v-model="state"
      @input="onChange"
      :placeholder="placeholder"
    />
  </div>
</template>
