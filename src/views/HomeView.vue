<template>
  <CHeader />
  <CBanner />
  <BooksOfTheMonth :lishBook="lishBook"/>
  <BestSeller :lishBook="lishBook"/>
  <AuthorsOfTheMonth :authors="authors" />
  <HappyClientSay />
  <OurService />
  <CFooter />
</template>

<script>
import CHeader from "../components/UI/Header/CHeader.vue"
import CFooter from "../components/UI/Footer/Footer.vue"
import AuthorsOfTheMonth from "../components/User/Home/AuthorsOfTheMonth/AuthorsOfTheMonth.vue"
import CBanner from "../components/User/Home/Banner/CBanner.vue"
import BestSeller from "../components/User/Home/BestSeller/BestSeller.vue"
import BooksOfTheMonth from "../components/User/Home/BooksOfTheMonth/BooksOfTheMonth.vue"
import HappyClientSay from "@/components/User/Home/HappyClientSay/HappyClientSay.vue"
import OurService from "@/components/User/Home/OurService/OurService.vue"
import SachService from '@/service/SachService'
import TheLoaiService from '@/service/TheLoaiService'
import TacGiaService from '@/service/TacGiaService'
import VietService from "@/service/VietService"

export default {
  name: "HomeView",
  data(){
    return {
      lishBook: [],
      bookTypes: [],
      authors: [],
      writedBy: [],
    };
  },
  components: {
    CHeader,
    CFooter,
    AuthorsOfTheMonth,
    CBanner,
    BestSeller,
    BooksOfTheMonth,
    HappyClientSay,
    OurService
  },
  methods:{
    getLishBook: function() {
      SachService.getAll().then(res => {
        this.lishBook = res.data;
      });
    },
    getBookTypes: function() {
      TheLoaiService.getAll().then(res => {
        this.bookTypes = res.data;
      });
    },
    getAuthors: function() {
      TacGiaService.getAll().then(res => {
        this.authors = res.data;
      });
    },
    getWritedBy: function() {
      VietService.getAll().then(res => {
        this.writedBy = res.data;
      });
    },
  },
  computed:{
    
  },
  created() {
    this.getLishBook();
    this.getBookTypes();
    this.getAuthors();
    this.getWritedBy();
    // console.log(sessionStorage.getItem("userID"));
  },
};
</script>
