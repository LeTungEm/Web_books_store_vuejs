<template>
  <CHeader :changeNumber="this.changeNumber" @search="changeSearch" />
  <div className="relative flex px-5 mb-5 lg:px-10">
    <LeftMenu
      :categoryArr="bookTypes"
      :authorArr="authors"
      :publisherArr="publishers"
      @changeSelectedAuthor="changeSelectedAuthor"
      @changeSelectedPublisher="changeSelectedPublisher"
      @changeSelectedCategory="changeselectedCategory"
    />
    <ListBooks
      @changeCart="this.changeNumber += 1"
      :lishBook="this.lishBook"
      :search="search"
      :selectedCategory="this.selectedCategory"
      :selectedAuthor="this.selectedAuthor"
      :selected-publisher="this.selectedPublisher"
    />
  </div>
  <CFooter />
</template>

<script>
import CHeader from "../components/UI/Header/CHeader.vue";
import LeftMenu from "@/components/User/Shop/LeftMenu/LeftMenu.vue";
import ListBooks from "@/components/User/Shop/ListBooks/ListBooks.vue";
import CFooter from "../components/UI/Footer/Footer.vue";
import SachService from "@/service/SachService";
import TheLoaiService from "@/service/TheLoaiService";
import TacGiaService from "@/service/TacGiaService";
import NhaXuatBanService from '@/service/NhaXuatBanService';

export default {
  name: "ShopView",
  data() {
    return {
      selectedCategory: [],
      selectedAuthor: [],
      selectedPublisher: [],
      search: "",
      lishBook: [],
      bookTypes: [],
      authors: [],
      publishers: [],
      changeNumber: 0,
    };
  },
  components: {
    CHeader,
    LeftMenu,
    ListBooks,
    CFooter,
  },
  methods: {
    getLishBook: function () {
      SachService.getAll().then((res) => {
        this.lishBook = res.data;
      });
    },
    getBookTypes: function () {
      TheLoaiService.getAll().then((res) => {
        this.bookTypes = res.data;
      });
    },
    getAuthors: function () {
      TacGiaService.getAll().then((res) => {
        this.authors = res.data;
      });
    },
    getPublisher: function () {
      NhaXuatBanService.getAll().then((res) => {
        this.publishers = res.data;
      });
    },
    changeSelectedAuthor(lishChoice) {
      this.selectedAuthor = lishChoice;
    },
    changeSelectedPublisher(lishChoice) {
      this.selectedPublisher = lishChoice;
    },

    changeselectedCategory(lishChoice) {
      this.selectedCategory = lishChoice;
    },

    changeSearch(search) {
      this.search = search;
    },
  },
  created() {
    this.getLishBook();
    this.getBookTypes();
    this.getAuthors();
    this.getPublisher();
  },
};
</script>

<style>
</style>