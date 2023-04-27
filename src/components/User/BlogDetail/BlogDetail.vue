<template>
  <div class="p-5">
    <img
      class="object-bottom object-cover w-full rounded-xl h-[50vh]"
      :src="image"
      alt="anh"
    />
  </div>
  <div class="-mt-20 md:-mt-40 left-0 right-0 h-96 absolute">
    <div class="w-4/5 rounded-xl bg-white mx-auto py-4 px-8 md:py-10 md:px-20 lg:py-16 lg:px-28">
        <h1 class="text-2xl md:text-5xl lg:text-7xl">{{ this.title }}</h1>
        <p class="text-base md:text-2xl lg:text-3xl text-gray-600 mt-5 md:mt-10">{{content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogDetail",
  props: {
    image: String,
    title: String,
    content: String,
  },
};
</script>

<style>
</style>