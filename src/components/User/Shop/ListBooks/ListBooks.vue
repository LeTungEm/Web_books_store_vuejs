<template>
  <div
    className="md:h-[80vh] flex-1 md:overflow-y-auto grid grid-cols-2 gap-5 scrollbar-hide ml-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
  >
    <BookItem
      v-for="book in filterBooks()"
      @changeCart="this.$emit('changeCart')"
      :bookId="book.masach"
      buttonHover
      :key="book.tensach"
      :price="book.giatien"
      contentCenter
      :author="book.tentg"
      :title="book.tensach"
      :rate="5"
      :imageHeight="'h-[200px] lg:h-[300px]'"
      :image="book.photo"
    />
  </div>
</template>

<script>
import BookItem from "../../../UI/Item/BookItem.vue";

export default {
  name: "ListBooks",
  data() {
    return {};
  },
  props: {
    lishBook: Array,
    selectedCategory: Array,
    selectedPublisher: Array,
    selectedAuthor: Array,
    search: String,
  },
  methods: {
    filterBookManyCategory(stringCategory, selectedCategory) {
      let arrCategory = stringCategory.split(", ");
      for (let category of arrCategory) {
        if (selectedCategory.includes(category)) return true;
      }
      return false;
    },
    filterByCategory(selectedCategory, list) {
      if (selectedCategory.length) {
        return list.filter((book) =>
          this.filterBookManyCategory(book.tentheloai, selectedCategory)
        );
      }
      return list;
    },
    filterByPublisher(selectedPublisher, list) {
      if (selectedPublisher.length) {
        return list.filter((book) => selectedPublisher.includes(book.tennxb));
      }
      return list;
    },
    filterBookManyAuthor(stringAuthors, selectedAuthor) {
      let arrAuthorName = stringAuthors.split(", ");
      for (let author of arrAuthorName) {
        if (selectedAuthor.includes(author)) return true;
      }
      return false;
    },
    filterByAuthor(selectedAuthor, list) {
      if (selectedAuthor.length) {
        return list.filter((book) =>
          this.filterBookManyAuthor(book.tentg, selectedAuthor)
        );
      }
      return list;
    },
    filterBySearch(search, list) {
      if (search != "") {
        return list.filter(
          (book) =>
            book.tensach.toLowerCase().indexOf(search.toLowerCase()) > -1
        );
      }
      return list;
    },
    filterBooks() {
      let filter = [];
      filter = this.lishBook;
      filter = this.filterByCategory(this.selectedCategory, filter);
      filter = this.filterByPublisher(this.selectedPublisher, filter);
      filter = this.filterByAuthor(this.selectedAuthor, filter);
      filter = this.filterBySearch(this.search, filter);
      return filter;
    },
  },
  components: {
    BookItem,
  },
};
</script>

<style>
</style>