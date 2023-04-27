<template>
  <Header/>
  <ListBorrowBooks />
  <BookBorrowForm />
</template>

<script>
import Header from "@/components/UI/Header/Header.vue";
import BookBorrowForm from "@/components/User/BookBorrowForm/BookBorrowForm.vue";
import ListBorrowBooks from "@/components/User/BookBorrowForm/ListBorrowBooks.vue";

export default {
  name: "BookBorrowFormView",
  components: { BookBorrowForm, ListBorrowBooks, Header },
  created() {
  },
};
</script>

<style>
</style>