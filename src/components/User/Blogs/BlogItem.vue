<template>
  <router-link :to="`/blogDetail/${id}`" class="h-full shadow-md pb-12 bg-gray-50 relative">
    <img
      :src="`https://webbooksstore.000webhostapp.com/Images/blogs/${image}`"
      class="w-full h-52 md:h-64 lg:h-72 xl:h-96 object-cover"
    />
    <div class="p-8 relative">
      <div class="text-xs text-gray-600 uppercase font-semibold">
        {{ createDate }}
      </div>
      <h2 class="mt-3 text-3xl mb-6 text-black leading-tight max-w-sm">
        {{ blogName }}
      </h2>
      <p class="mt-4 max-w-md">{{ content.substr(0, 150) }}...</p>
    </div>
    <div
      class="px-8 absolute bottom-5 flex items-center uppercase text-sm text-black hover:text-gray-600 font-semibold"
      >Read article
      <svg
        class="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BlogItem",
  props: {
    id: String,
    image: String,
    createDate: String,
    blogName: String,
    content: String,
  },
};
</script>

<style></style>F