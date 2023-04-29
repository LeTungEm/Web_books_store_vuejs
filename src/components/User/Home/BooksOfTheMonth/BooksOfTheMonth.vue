<template>
    <div className="flex justify-between py-14 lg:px-32">
        <h1 className="text-2xl font-medium sm:text-3xl lg:text-5xl 2xl:text-6xl"><ion-icon class="text-orange-500 -translate-y-5" name="sparkles"></ion-icon> Books Of The Month</h1>
        <router-link to="/shop" className="group rounded-sm inline-flex items-center px-6 bg-black text-white hover:text-black hover:bg-white hover:border-2 ease-in-out duration-300">SEE ALL <ion-icon class="mx-2 group-hover:translate-x-4 group-hover:text-2xl ease-in-out duration-500" name="arrow-forward-sharp"></ion-icon></router-link>
    </div>
    <div className="relative w-full">
        <Swiper
            :spaceBetween="40"
            :loop="true"
            :breakpoints="{
              0: {
                  slidesPerView: 1,
              },
              400: {
                  slidesPerView: 1,
              },
              1000: {
                  slidesPerView: 2,
              },
              1500: {
                  slidesPerView: 3
              }
            }"
            :centeredSlides="true"
            :modules="modules"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            v-bind:class="'w-full grid overflow-y-hidden'"
            className="mySwiper"
        >
            <SwiperSlide v-for="book in getBooksOfTheMoon" :key="book"><BookItem flex button :bookId="book.masach" :author="book.tentg" :title="book.tensach" :rate="3.5" :image="book.photo" /></SwiperSlide>

        </Swiper>
        <div className="absolute w-full h-1/2 bg-yellow-50 bottom-0">&nbsp;</div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from 'swiper';
import BookItem from "../../../UI/Item/BookItem.vue";

export default {
  name: "BooksOfTheMonth",
  data() {
    return {
    };
  },
  props:{
    lishBook: Array,
  },
  components: {
    BookItem,
    Swiper,
    SwiperSlide,
  },
  computed:{
    getBooksOfTheMoon(){
      let booksOfTheMoon = [];
      for(let book of this.lishBook){
        if(booksOfTheMoon.length <= 7)
          booksOfTheMoon.push(book);
        else
          break;
      }
      return booksOfTheMoon;
    }
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
};
</script>

<style>
</style>