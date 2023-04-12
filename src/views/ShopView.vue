<template>
  <CHeader/>
  <div className="relative flex px-5 mb-5 lg:px-10">
    <Published @changeChoie="changeListChoice" />
    <ListBooks :choicedPublish="this.choicedPublish" />
  </div>
</template>

<script>
import CHeader from "../components/UI/Header/Header.vue"
import Published from "@/components/User/Shop/Published/Published.vue";
import ListBooks from "@/components/User/Shop/ListBooks/ListBooks.vue";

export default {
  name: "ShopView",
  data() {
    return {
      choicedPublish: [],
    };
  },
  components: {
    CHeader,
    Published,
    ListBooks,
  },
  methods:{
    changeListChoice(choicedPublish){
      console.log("shop xuat: ",choicedPublish);
      this.choicedPublish = choicedPublish;
    }
  }
};
</script>

<style>
</style>