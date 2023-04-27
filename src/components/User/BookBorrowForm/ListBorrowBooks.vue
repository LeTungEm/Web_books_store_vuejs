<template>
  <div class="py-4 px-5">
    <div
      class="flex sticky top-36 md:top-48 bg-white z-10 justify-between items-center border-b-2 p-4 mb-5"
    >
      <h1 class="text-4xl lg:text-6xl text-orange-700">Borrow Books</h1>
    </div>
    <div class="pr-3 pl-3 pb-5">
      <CartItem
        @removeItem="removeItem($event)"
        v-for="book in listBook"
        :key="book.bookId"
        :id="book.bookId"
        :name="book.title"
        :image="book.image"
        :amount="book.amount"
      />
    </div>
    <!-- <img
          v-if="!showItems"
          src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
          class="mx-auto"
          alt=""
        /> -->
  </div>
</template>

<script>
import CartItem from '../Shop/Cart/CartItem.vue';
export default {
  name: "ListBorrowBooks",
  data() {
    return {
      listBook: [],
    };
  },
  methods: {
    getAllBookFromCart() {
      let cart = localStorage.getItem("cart");
      if (cart != null) {
        this.listBook = JSON.parse(cart);
      }
      this.checkCartIsNull();
    },
    removeItem(bookId) {
      if (this.listBook) {
        let index = this.listBook.findIndex((item) => item.bookId === bookId);
        this.listBook.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(this.listBook));
      }
      this.checkCartIsNull();
    },
    checkCartIsNull() {
      let CartIsNull = this.listBook.length > 0 ? false : true;
      this.$emit("isCartNull", CartIsNull);
    },
  },
  components: { CartItem },
  created() {
    this.getAllBookFromCart();
  },
};
</script>

<style>
</style>