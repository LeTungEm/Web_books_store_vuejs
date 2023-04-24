<template>
  <footer class="bg-gray-100 py-8">
    <div
      class="container mx-auto px-5 flex items-center justify-between flex-wrap"
    >
      <div class="flex items-center flex-shrink-0 mr-6">
        <router-link to="/" class="text-lg md:text-2xl lg:text-4xl font-bold uppercase"
          >book <span :style="`background-image: url(${backGround})`" class="bg-clip-text text-transparent bg-cover bg-bottom">forest</span></router-link
        >
      </div>
      <div class="flex items-center justify-end">
        <router-link
          to="/"
          class="inline-block text-gray-600 hover:text-gray-800 mr-4"
        >
          About Us
        </router-link>
        <router-link
          to="/"
          class="inline-block text-gray-600 hover:text-gray-800 mr-4"
        >
          Contact Us
        </router-link>
        <router-link
          to="/"
          class="inline-block text-gray-600 hover:text-gray-800"
        >
          FAQs
        </router-link>
      </div>
    </div>
    <div class="container mx-auto mt-8 flex justify-center">
      <router-link to="/" class="text-gray-600 hover:text-gray-800 mr-4">
        <ion-icon class="text-2xl" name="logo-facebook"></ion-icon>
      </router-link>
      <router-link to="/" class="text-gray-600 hover:text-gray-800 mr-4">
        <ion-icon class="text-2xl" name="logo-instagram"></ion-icon>
      </router-link>
      <router-link to="/" class="text-gray-600 hover:text-gray-800">
        <ion-icon class="text-2xl" name="logo-twitter"></ion-icon>
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CFooter",
  data(){
    return{
      backGround: require("../../../assets/images/banner/loginBackGround.jpg"),
    };
  }
};
</script>

<style>
</style>