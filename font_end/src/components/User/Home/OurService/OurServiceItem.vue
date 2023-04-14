<template>
  <div className="flex items-center gap-5">
    <ion-icon class="text-3xl md:text-5xl" :name="icon"></ion-icon>
    <div>
      <h1 className="text-base md:text-xl">{{title}}</h1>
      <h4 className="text-xs md:text-base text-gray-500">{{description}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurServiceItem",
  props: {
    title: String,
    description: String,
    icon: String,
  },
};
</script>

<style>
</style>