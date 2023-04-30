<template>
  <div class="lg:w-8/12 mx-auto my-16">
    <div class="pb-24 border-b">
      <div class="grid grid-cols-1 lg:grid-cols-2 justify-center">
        <div class="mx-auto lg:mx-8 h-full w-1/4 lg:w-2/3">
          <img :src="`https://webbooksstore.000webhostapp.com/Images/books/${image}`" class="w-full h-full object-cover" />
        </div>
        <div class="mt-12 lg:mt-0 mx-8 leading-loose">
          <h1 class="text-3xl font-bold">{{ title }}</h1>          
          <p class="text-gray-600 mb-6 text-justify">
            {{ description }}
          </p>
          <div class="flex justify-between mt-12">
            

            <CButton v-on:click="addToCart()"/>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full">
          <!-- <ul class="inline-flex pt-2 px-1 w-full border-b justify-center">
            <li>
              <a
                class="text-xs font-bold uppercase px-5 py-3 rounded -mb-px bg-white cursor-pointer block leading-normal border-none"
              >
                Description
              </a>
            </li>
            <li>
              <a
                class="text-xs font-bold uppercase px-5 py-3 rounded -mb-px bg-white cursor-pointer block leading-normal border-l border-r border-t"
              >
                Infomation
              </a>
            </li>
          </ul> -->
          <h1
            class="text-xs font-bold uppercase px-5 py-3 rounded -mb-px bg-white cursor-pointer block leading-normal border-none"
          >
            
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CButton from '@/components/UI/Library/CButton.vue';
export default {
  components: { CButton },
  name: "BookDetail",
  data(){
    return {
    };
  },
  props: {
    bookId: String,
    title: String,
    image: String,
    description: String,
  },
  methods: {
    addBookToCart(listBook) {
      let index = listBook.findIndex((item) => item.bookId === this.bookId);
      if (index > -1) {
        listBook[index].amount += 1;
      } else {
        listBook.push({
          bookId: this.bookId,
          title: this.title,
          image: this.image,
          amount: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(listBook));
    },
    addToCart() {
      let cart = localStorage.getItem("cart");
      let listBook = [];
      if (cart != null) {
        listBook = JSON.parse(cart);
        this.addBookToCart(listBook);
      } else {
        listBook.push({
          bookId: this.bookId,
          title: this.title,
          image: this.image,
          amount: 1,
        });
        localStorage.setItem("cart", JSON.stringify(listBook));
      }
      this.$emit("changeCart");
    },
  },
};
</script>

<style>
</style>