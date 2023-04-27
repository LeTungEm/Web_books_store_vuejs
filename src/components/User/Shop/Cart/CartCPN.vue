<template>
  <div>
    <div
      v-if="isOpen"
      @click="this.$emit('closeCart')"
      class="fixed bg-black opacity-70 inset-0 -z-10 h-full"
    ></div>
    <div
      v-bind:class="
        isOpen
          ? 'w-3/4 lg:w-1/3'
          : 'w-0 lg:w-0 overflow-hidden translate-x-full'
      "
      class="border-t border-black h-[75vh] absolute top-full right-0 duration-700 max-w-lg my-auto shadow-lg bg-white z-20 overflow-auto scrollbar-hide"
    >
      <div>
        <div
          class="flex sticky top-0 bg-white z-10 justify-between items-center border-b-2 p-4 mb-5"
        >
          <h1 class="font-bold text-2xl text-green-500">Shopping Cart</h1>
        </div>
        <div class="pr-3 pl-3 pb-5">
          <CartItem
            @removeItem="removeItem($event)"
            v-for="(book) in listBook"
            :key="book.bookId"
            :id="book.bookId"
            :name="book.title"
            :image="book.image"
            :amount="book.amount"
          />
        </div>
        <img
          v-if="!showItems"
          src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
          class="mx-auto"
          alt=""
        />
        <!-- <div class="border-b pb-5">
          <div class="flex justify-between font-bold">
            <h1>Total:</h1>
            <p>0</p>
          </div>
        </div> -->

        <div class="mt-5">
          <router-link
            to="/bookBorrowForm"
            class="block text-center w-full border my-2 py-3 bg-green-500 hover:bg-green-600 text-white"
          >
            Borrow books
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  name: "CartCPN",
  data() {
    return {
      listBook: [],
      showItems: true,
    };
  },
  props: {
    isOpen: Boolean,
    isChange: Number,
  },
  watch:{
    isChange: function(){
      this.getAllBookFromCart();
    }
  },
  methods: {
    getAllBookFromCart() {
      let cart = localStorage.getItem("cart");
      if (cart != null) {
        this.listBook = JSON.parse(cart);
      }
      this.checkCartIsNull();
    },
    removeItem(bookId){
      if (this.listBook) {
        let index = this.listBook.findIndex((item) => item.bookId === bookId);
        this.listBook.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.listBook));
      }
      this.checkCartIsNull();
    },
    checkCartIsNull(){
      let CartIsNull = this.listBook.length > 0?false:true;
      this.$emit("isCartNull", CartIsNull);
    }
  },
  components: {
    CartItem,
  },
  created(){
    this.getAllBookFromCart();
  }
};
</script>

<style>
</style>