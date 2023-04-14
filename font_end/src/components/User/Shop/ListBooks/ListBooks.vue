<template>
  <div
    className="md:h-[100vh] flex-1 md:overflow-y-auto grid grid-cols-2 gap-5 scrollbar-hide ml-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
  >
    <BookItem
      v-for="book in filterBooks()"
      :key="book.title"
      :price="book.price"
      contentCenter
      :author="book.author"
      :title="book.title"
      :rate="book.rate"
      :image="book.image"
    />
  </div>
</template>

<script>
import BookItem from "../../../UI/Item/BookItem.vue";

export default {
  name: "ListBooks",
  data() {
    return {
      listBook: [
        {
          price: "200000",
          author: "kim charles",
          title: "Book of moon moon1",
          rate: 4,
          image: require("../../../../assets/images/books/HarryBook.jpg"),
          type: "fantasy",
        },
        {
          price: "200000",
          author: "kim charles",
          title: "Book of moon moon2",
          rate: 4,
          image: require("../../../../assets/images/books/heroAtTheFall.jpg"),
          type: "fantasy",
        },
        {
          price: "200000",
          author: "kim charles",
          title: "Book of moon moon3",
          rate: 4,
          image: require("../../../../assets/images/books/DaughterOfTheSerpentine.jpg"),
          type: "travel",
        },
        {
          price: "2000000",
          author: "kim charles",
          title: "Book of moon moon4",
          rate: 4,
          image: require("../../../../assets/images/books/DaughterOfMan.jpg"),
          type: "ficture",
        },
        {
          price: "200000",
          author: "kim charles",
          title: "Book3",
          rate: 4,
          image: require("../../../../assets/images/books/DaughterOfTheGods.jpg"),
          type: "ficture",
        },
        {
          price: "200000",
          author: "kim charles",
          title: "Book 2",
          rate: 4,
          image: require("../../../../assets/images/books/DaughterOfTheDeep.jpg"),
          type: "travel",
        },
      ],
    };
  },
  props: {
    choicedPublish: Array,
    search: String,
    price: Object,
  },
  methods: {
    filterBooks() {
      let filter = [];
      filter = this.listBook;
      if (this.choicedPublish.length) {
        filter = filter.filter((book) => 
          (this.choicedPublish.includes(book.type.toString())) 
        );
      }
      if (this.search){
        filter = filter.filter(book => (
          book.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        ))
      }
      if (this.price){
        filter = filter.filter(book => {
          if(this.price.max){
            if(book.price > this.price.min && book.price <= this.price.max){
              return book;
            }
          }else{
            if(book.price >= this.price.min){
              return book;
            }
          }
      })
      }
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