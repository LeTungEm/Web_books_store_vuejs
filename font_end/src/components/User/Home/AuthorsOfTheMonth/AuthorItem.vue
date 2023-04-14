<template>
  <div class="flex-col justify-center md:w-72">
    <div
      class="h-52 w-52 mx-auto flex-1 rounded-full bg-gray-800 overflow-hidden md:w-full md:h-72 hover:shadow-lg duration-300"
    >
      <img class="object-fill w-full hover:scale-110 duration-500" :src="image" alt="author" />
    </div>
    <div class="text-center">
      <h1 class="text-lg my-4 font-semibold md:text-2xl xl:text-4xl">
        {{title}}
      </h1>
      <h5 class="text-base font-light md:text-xl xl:text-2xl">{{description}}</h5>
    </div>
  </div>
</template>

<script>
export default {
    name:"AuthorItem",
    props:{
        image: String, 
        title: String, 
        description: String,
    }
};
</script>

<style>
</style>