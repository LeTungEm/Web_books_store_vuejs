<template>
  <div
    v-bind:class="flex ? 'pr-4' : ''"
    class="border relative w-full h-full sm:p-0 rounded-sm hover:shadow-2xl hover:-translate-y-2 duration-500"
  >
    <div v-bind:class="flex ? 'flex ' : ''" class="[&>*]:flex-1 h-full">
      <div>
        <!-- book image -->
        <img
          class="w-full h-full object-fill rounded-sm"
          :src="image"
          alt="item book of the moon"
        />
      </div>
      <div
        v-bind:class="contentCenter ? 'text-center' : 'pl-5'"
        class=" my-auto"
      >
        <!-- Rate -->
        <div
          v-bind:class="contentCenter ? 'justify-center' : ''"
          class=" flex flex-wrap items-center text-gray-400 my-5"
        >
          <CRating :rate="rate" />
          ({{ rate }} reviews)
        </div>
        <h3 class="text-gray-700">By: {{author}}</h3>
        <h1
          v-bind:class="flex ? 'text-2xl' : 'text-lg'"
          class="lg:text-2xl font-semibold px-1"
        >
          {{title}}
        </h1>
        <button
          v-if="button"
          class="group rounded-sm inline-flex items-center mt-5 pl-6 border-2 bg-white text-black ease-in-out text-xs md:text-lg duration-300 hover:translate-x-4"
        >
          Add to cart
          <ion-icon
            class="ml-10 px-5 py-5 bg-black text-white group-hover:text-xl ease-in-out duration-500"
            name="arrow-forward-sharp"
          ></ion-icon>
        </button>
        <h1 v-else class="text-xl text-orange-500 mt-5 pb-5">
          {{ formatPrice(price) }}
        </h1>

        <h5
          v-if="description"
          class="py-5 px-4 text-2xl text-gray-400 md:absolute md:bottom-0"
        >
          {{description}}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import CRating from "../Library/CRating";
import { formatPrice } from "@/assets/js";

export default {
  name: "BookItem",
  props: {
    image: String,
    rate: Number,
    author: String,
    title: String,
    price: String,
    description: String,
    bookId: String,
    flex: Boolean,
    button: Boolean,
    contentCenter: Boolean,
  },
  components:{
    CRating,
  },
  methods: {
    formatPrice,
    
  },
};
</script>

<style>
</style>