<template>
  <button
    class="text-white bg-orange-700 py-3 px-4 mt-5 rounded-md group/button border border-orange-700 w-full transition-[background-color] duration-700 [&>*]:transition-[letter-spacing] active:bg-orange-600 hover:font-bold hover:text-orange-700 hover:bg-white [&>*]:duration-500"
  >
    <span class="mr-2 group-hover/button:mr-0 group-hover/button:tracking-[5px]">Add</span>
    <span class="mr-2 group-hover/button:mr-0 group-hover/button:tracking-[5px]">to</span>
    <span class="group-hover/button:tracking-[5px]">cart</span>
  </button>
</template>

<script>
export default {
    name: "CButton"
};
</script>

<style>
</style>