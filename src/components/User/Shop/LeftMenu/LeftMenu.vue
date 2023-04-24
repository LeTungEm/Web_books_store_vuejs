<template>
  <ion-icon
    @click="this.categoryStatus = !this.categoryStatus"
    class="md:hidden text-2xl"
    name="list-outline"
  ></ion-icon>
  <div
    v-bind:class="
      categoryStatus
        ? 'bg-white translate-y-0'
        : 'translate-y-full'
    "
    class="z-20 fixed left-0 bg-white w-full h-[100vh] duration-500 transition-transform flex-none md:w-64 lg:w-80 md:translate-y-0 md:relative md:block"
  >
    <ul
      class="pb-5 h-full text-xl overflow-scroll scrollbar-hide rounded-sm border-2"
    >
      <li
        @click="this.categoryStatus = !this.categoryStatus"
        class="bg-white text-center border border-black font-bold md:hidden hover:bg-black hover:text-white duration-300"
      >
        FILTER
      </li>
      <li>
        <LeftMenuItem @changeSelected="sendSelectedList($event, 'changeSelectedCategory')" :title="'Category'" :listData="getCategoryNames"/>
      </li>
      <li>
        <LeftMenuItem @changeSelected="sendSelectedList($event, 'changeSelectedAuthor')" :title="'Author'" :listData="getAuthorNames"/>
      </li>
      <li>
        <LeftMenuItem @changeSelected="sendSelectedList($event, 'changeSelectedPublisher')" :title="'Publisher'" :listData="getPublisherNames"/>
      </li>
    </ul>
  </div>
</template>

<script>
import LeftMenuItem from './LeftMenuItem.vue';

export default {
  name: "LeftMenu",
  data() {
    return {
      categoryStatus: false,
    };
  },
  props:{
    categoryArr: Array,
    authorArr: Array,
    publisherArr: Array,
  },
  methods: {
    sendSelectedList(selectedList, name){
      this.$emit(name, selectedList);
    },
  },
  computed:{
    getCategoryNames(){
      let categoryNames = [];
      this.categoryArr.map(data => {
        categoryNames.push(data.tentheloai);
      });
      return categoryNames;
    },
    getAuthorNames(){
      let authorNames = [];
      this.authorArr.map(data => {
        authorNames.push(data.tentg);
      });
      return authorNames;
    },
    getPublisherNames(){
      let publisherNames = [];
      this.publisherArr.map(data => {
        publisherNames.push(data.tennxb);
      });
      return publisherNames;
    }
  },
  components:{
    LeftMenuItem,
  },
  created() {},
};
</script>

<style>
</style>