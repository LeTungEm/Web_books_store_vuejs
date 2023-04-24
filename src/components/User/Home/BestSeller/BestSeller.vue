<template>
    <h1 class="text-3xl text-center font-medium my-20 lg:text-5xl 2xl:text-7xl"><ion-icon class="text-orange-500 -translate-y-5" name="sparkles"></ion-icon> Best Sellers <ion-icon class="text-orange-500 translate-y-8" name="sparkles"></ion-icon></h1>
    <div class="grid grid-cols-2 gap-2 px-2 md:px-4 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:grid-rows-2">
        <div v-for="book,index in getLishBestSeller" :class="index == 4?'md:col-start-3 col-span-2 md:row-start-1 md:row-span-2':''" :key="book" >
          <BookItem 
            :imageHeight="'h-1/2 xl:h-3/5'"
            :price="book.giatien" 
            contentCenter 
            :author="book.tentg" 
            :title="book.tensach" 
            :rate="4" 
            :image="book.photo"
            :description="index == 4?book.gioithieu.substr(0, 150)+'...':''" />
        </div>
    </div>
</template>

<script>
import BookItem from '../../../UI/Item/BookItem.vue';
export default {
  name: "BestSeller",
  data() {
    return {
      BestSeller: [],
    };
  },
  props:{
    lishBook: Array,
  },
  computed:{
    getLishBestSeller: function(){
      let bestSeller = [];
      for(let book of this.lishBook){
        if(bestSeller.length <= 8)
        bestSeller.push(book);
        else
          break;
      }
      return bestSeller;
    }
  },
  components:{
    BookItem,
  }
};
</script>

<style>
</style>