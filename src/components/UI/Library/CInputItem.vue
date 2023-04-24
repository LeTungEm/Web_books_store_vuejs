<template>
  <input
    :onchange="changeValue"
    v-bind:class="className"
    :type="type"
    :value="data"
    class="w-full rounded-md border border-gray-300 focus:border-orange-700 focus:outline-none focus:ring-1 focus:ring-orange-700 py-3 px-2 text-gray-500"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "CInputItem",
  methods:{
    changeValue(e){
        this.$emit("changeValue", e.target.value);
    }
  },
  props: {
    type: String,
    placeholder: String,
    className: String,
    data: String,
  },
  created(){
  }
};
</script>

<style>
</style>