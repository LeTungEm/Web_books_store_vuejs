<template>
    <CHeader/>
    <CBanner/>
    <BooksOfTheMonth/>
    <BestSeller/>
    <AuthorsOfTheMonth/>
    <HappyClientSay/>
    <OurService/>
    <CFooter/>
</template>

<script>
import CHeader from "../components/UI/Header/Header.vue"
import CFooter from "../components/UI/Footer/Footer.vue"
import AuthorsOfTheMonth from "../components/User/Home/AuthorsOfTheMonth/AuthorsOfTheMonth.vue"
import CBanner from "../components/User/Home/Banner/CBanner.vue"
import BestSeller from "../components/User/Home/BestSeller/BestSeller.vue"
import BooksOfTheMonth from "../components/User/Home/BooksOfTheMonth/BooksOfTheMonth.vue"
import HappyClientSay from "@/components/User/Home/HappyClientSay/HappyClientSay.vue"
import OurService from "@/components/User/Home/OurService/OurService.vue"

export default {
  name: "HomeView",
  data(){
    return {
      status: true,
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
  methods: {

  },
  created() {
  },
};
</script>
