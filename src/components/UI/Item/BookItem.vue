<template>
  <div
    v-bind:class="flex ? 'pr-4' : ''"
    class="border group relative w-full h-full sm:p-0 rounded-sm hover:shadow-2xl hover:-translate-y-2 duration-500"
  >
    <div v-bind:class="flex ? 'flex ' : ''" class="[&>*]:flex-1 h-full">
      <div :class="imageHeight" class="relative">
        <!-- book image -->
        <img
          class="w-full h-full object-fill rounded-sm"
          :src="require(`../../../assets/images/books/${image}`)"
          alt="item book of the moon"
        />
        <div
          v-if="buttonHover"
          v-on:click="addToCart()"
          class="absolute bottom-0 left-0 w-0 group-hover:w-full group/active active:bg-orange-600 duration-500 rounded-sm bg-white bg-opacity-80 flex justify-end items-center"
        >
          <ion-icon
            class="text-orange-600 group-active/active:text-white py-1 px-2 text-lg lg:text-3xl cursor-pointer"
            name="cart-outline"
          ></ion-icon>
        </div>
      </div>
      <div
        v-bind:class="contentCenter ? 'text-center' : 'px-5'"
        class="p-1 my-auto"
      >
        <!-- Rate -->
        <div
          v-bind:class="contentCenter ? 'justify-center' : ''"
          class="flex flex-wrap items-center text-gray-400 my-5"
        >
          <CRating :rate="rate" />
          ({{ rate }} reviews)
        </div>
        <h3 class="text-gray-700">By: {{ author }}</h3>
        <h1
          v-bind:class="flex ? 'text-2xl' : 'text-lg'"
          class="lg:text-2xl font-semibold px-1"
        >
          {{ title }}
        </h1>
        <CButton v-if="button" />
        <h1 v-else class="text-xl text-orange-500 mt-5 pb-5">
          {{ formatPrice(price) }}
        </h1>

        <h5
          v-if="description"
          class="py-5 px-4 text-2xl text-gray-400 md:absolute md:bottom-0"
        >
          {{ description }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import CButton from "../Library/CButton.vue";
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
    imageHeight: String,
    buttonHover: Boolean,
  },
  components: {
    CRating,
    CButton,
  },
  methods: {
    formatPrice,
    addBookToCart(listBook) {
      let index = listBook.findIndex((item) => item.bookId === this.bookId);
      if (index > -1) {
        listBook[index].amount += 1;
        localStorage.setItem("cart", JSON.stringify(listBook));
      } else {
        listBook.push({ bookId: this.bookId, title: this.title, image: this.image, amount: 1 });
        localStorage.setItem("cart", JSON.stringify(listBook));
      }
    },
    addToCart() {
      let cart = localStorage.getItem("cart");
      let listBook = [];
      if (cart != null) {
        listBook = JSON.parse(cart);
        this.addBookToCart(listBook);
      } else {
        listBook.push({ bookId: this.bookId, title: this.title, image: this.image, amount: 1 });
        localStorage.setItem("cart", JSON.stringify(listBook));
      }
      this.$emit("changeCart");
    },
  },
};
</script>

<style>
</style>