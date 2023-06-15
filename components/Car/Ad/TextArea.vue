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
  <div class="flex flex-col w-[100%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm">{{ props.title }}</label>

    <textarea
      :name="props.name"
      id=""
      class="p-2 border w-100 rounded"
      v-model="state"
      @input="onChange"
      :placeholder="placeholder"
    >
    </textarea>
  </div>
</template>
