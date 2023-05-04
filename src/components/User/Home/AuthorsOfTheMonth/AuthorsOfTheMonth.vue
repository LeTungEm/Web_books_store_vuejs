<template>
  <h1
    className="text-3xl text-center font-medium mt-32 lg:text-5xl 2xl:text-7xl"
  >
    <ion-icon class="text-orange-500 -translate-y-5" name="sparkles"></ion-icon>
    Authors Of The Month
    <ion-icon class="text-orange-500 translate-y-8" name="sparkles"></ion-icon>
  </h1>
  <h5 className="pt-5 text-2xl text-center text-gray-600">
    Who are passionate authors of this Moon ?
  </h5>
  <div className="flex flex-wrap justify-center gap-5 mt-20 px-10 lg:gap-16">
    <AuthorItem
      v-for="author in getAuthorOfTheMoon"
      :key="author"
      :image="image2"
      :title="author.tentg"
      :description="author.gioithieu"
    />
  </div>
</template>

<script>
import AuthorItem from "./AuthorItem.vue";

export default {
  name: "AuthorsOfTheMonth",
  data(){
    return {
        image2:`https://webbooksstore.000webhostapp.com/Images/authors/1.jpg`,
    };
  },
  props:{
    authors: Array,
  },
  computed:{
    getAuthorOfTheMoon: function(){
      let authorOfTheMoon = [];
      for(let author of this.authors){
        if(authorOfTheMoon.length <= 3)
          authorOfTheMoon.push(author);
        else{
          break;
        }
      }
      return authorOfTheMoon;
    }
  },
  methods:{
    
  },
  components: {
    AuthorItem,
  },
  created(){
  }
};
</script>

<style>
</style>