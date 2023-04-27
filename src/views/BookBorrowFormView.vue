<template>
  <ListBorrowBooks />
  <BookBorrowForm />
</template>

<script>
import BookBorrowForm from "@/components/User/BookBorrowForm/BookBorrowForm.vue";
import ListBorrowBooks from "@/components/User/BookBorrowForm/ListBorrowBooks.vue";

export default {
  name: "BookBorrowFormView",
  components: { BookBorrowForm, ListBorrowBooks },
  created() {
  },
};
</script>

<style>
</style>