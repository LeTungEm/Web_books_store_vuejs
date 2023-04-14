<template>
  <CHeader @search="changeSearch" />
  <div className="relative flex px-5 mb-5 lg:px-10">
    <Published @changeRangePrice="changeRangePrice" @changePublishedChoie="changeListChoice" />
    <ListBooks :price="price" :search="search" :choicedPublish="this.choicedPublish" />
  </div>
  <CFooter/>
</template>

<script>
import CHeader from "../components/UI/Header/Header.vue"
import Published from "@/components/User/Shop/Published/Published.vue";
import ListBooks from "@/components/User/Shop/ListBooks/ListBooks.vue";
import CFooter from "../components/UI/Footer/Footer.vue"

export default {
  name: "ShopView",
  data() {
    return {
      choicedPublish: [],
      search: "",
      price:{
        min: 100000,
        max: 200000,
      }
    };
  },
  components: {
    CHeader,
    Published,
    ListBooks,
    CFooter,
  },
  methods:{
    changeListChoice(choicedPublish){
      this.choicedPublish = choicedPublish;
    },

    changeRangePrice(minPrice, maxPrice){
      this.price.min = minPrice;
      this.price.max = maxPrice;
    },

    changeSearch(search){
      this.search = search;
    }
  }
};
</script>

<style>
</style>