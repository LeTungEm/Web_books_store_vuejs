<template>
  <CHeader/>
  <div class="relative">
    <ListBorrowBooks />
    <BookBorrowForm />
  </div>
</template>

<script>
import CHeader from "@/components/UI/Header/CHeader.vue";
import BookBorrowForm from "@/components/User/BookBorrowForm/BookBorrowForm.vue";
import ListBorrowBooks from "@/components/User/BookBorrowForm/ListBorrowBooks.vue";

export default {
  name: "BookBorrowFormView",
  components: { BookBorrowForm, ListBorrowBooks, CHeader },
  created() {
  },
};
</script>

<style>
</style>