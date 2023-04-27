<template>
  <nav class="sticky top-0 left-0 right-0 z-50">
    <!-- First menu -->
    <div
      class="lg:flex justify-between px-10 md:px-20 py-5 bg-black text-white text-lg"
    >
      <div
        class="flex justify-center gap-5 lg:gap-10 text-xs md:text-base xl:text-lg hover:[&>*]:text-orange-700 [&>*]:duration-500"
      >
        <router-link to="/">Membership</router-link>
        <router-link to="/">Coupon and Deals</router-link>
        <router-link to="/">Best Seller</router-link>
      </div>
      <div
        class="flex justify-center gap-5 lg:gap-10 items-center text-xs md:[&>*]:text-base xl:[&>*]:text-lg [&>*]:flex [&>*]:items-center hover:[&>*]:text-orange-700 [&>*]:duration-500"
      >
        <div class="relative group">
          <ion-icon class="pr-2 text-inherit" name="person-outline"></ion-icon
          >My Account
          <ul  class="absolute cursor-pointer h-0 overflow-hidden top-full right-0 z-[52] duration-1000 group-hover:h-auto group-hover:text-white [&>*]:whitespace-nowrap hover:[&>*]:text-orange-700 [&>*]:py-2 [&>*]:px-6 p-2 bg-black">
            <li v-if="isLogin()" @click="logout()">Logout</li>
            <li v-else @click="this.$router.push('/login')">Login</li>
            <li>Close</li>
          </ul>
        </div>
        <div to="/"
          ><ion-icon class="pr-2 text-inherit" name="heart-outline"></ion-icon
          >Wishlist</div
        >
      </div>
    </div>
    <!-- Main menu  -->
    <div
      v-bind:class="{ 'bg-gray-100': bgMenu, 'bg-white': !bgMenu }"
      class="relative gap-20 py-5 px-10 lg:px-20 xl:grid xl:grid-cols-4"
    >
      <div class="flex items-center justify-between xl:justify-start">
        <div class="text-center">
          <ion-icon
            class="text-lg md:text-2xl xl:text-3xl"
            name="book-sharp"
          ></ion-icon>
          <h1 class="text-[10px] md:text-[16px] lg:text-xl font-bold uppercase">
            book <span :style="`background-image: url(${backGround})`" class="bg-clip-text text-transparent bg-cover bg-bottom">forest</span>
          </h1>
          <h3 class="text-[8px] md:text-[14px] lg:text-lg">Study blog</h3>
        </div>
        <div class="flex items-center xl:hidden">
          
          <div class="relative" v-bind:class="isCartNull?``:`before:content-[''] before:w-2 before:h-2 before:absolute before:top-0 before:right-0 before:bg-red-500 before:rounded-full`">
            <ion-icon
              @click="changeCartStatus"
              class="text-2xl mr-5 cursor-pointer"
              name="cart-outline"
            ></ion-icon>
          </div>
          <ion-icon
            @click="this.menuStatus = !this.menuStatus"
            class="text-4xl"
            name="menu-outline"
          ></ion-icon>
        </div>
      </div>
      <div
        v-bind:class="!this.menuStatus ? '-translate-y-[100%]' : ''"
        class="absolute top-full -z-10 left-0 right-0 pb-5 bg-inherit duration-700 transition-transform lg:px-20 xl:z-[51] xl:translate-y-0 xl:bg-none xl:top-0 xl:relative px-5 font-medium lg:text-lg xl:col-span-2 xl:pb-0 xl:mt-0"
      >
        <div class="flex shadow-sm items-center bg-white border rounded-sm">
          <input
            v-model="search"
            class="w-full h-6 text-[18px] outline-0 px-5 font-normal"
            placeholder="searching...."
            type="text"
          />
          <ion-icon class="text-3xl pr-5 py-1" name="search-sharp"></ion-icon>
        </div>
        <div
          class="justify-around gap-20 mt-5 xl:flex [&>*]:font-semibold [&>*]:block hover:[&>*]:text-orange-700 [&>*]:duration-500"
        >
          <router-link to="/">Home</router-link>
          <router-link to="/shop">Shop</router-link>
          <router-link to="/blogs">Blogs</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
      <div
        v-bind:class="menuStatus ? 'flex' : 'hidden'"
        class="xl:flex xl:flex-wrap justify-around mt-3"
      >
        <div class="pr-5 whitespace-nowrap md:pr-10 flex align-middle text-lg">
          <ion-icon
            class="lg:text-3xl my-auto md:my-0 mr-2 cursor-pointer"
            name="map-sharp"
          ></ion-icon
          >Bookshop Finder
        </div>
        <div 
          v-bind:class="isCartNull?``:`before:content-[''] before:xl:block before:hidden before:w-2 before:h-2 before:absolute before:top-0 before:right-0 before:bg-red-500 before:rounded-full`"
          class="relative">
          <ion-icon
            @click="changeCartStatus"
            class="hidden text-lg xl:block lg:text-3xl cursor-pointer hover:text-orange-700"
            name="cart-outline"
          ></ion-icon>
        </div>
      </div>
    </div>
    <CartCartCPN @isCartNull="this.isCartNull = $event" :isChange="changeNumber" @closeCart="changeCartStatus" :is-open="isCartOpen" />
  </nav>
</template>

<script>
import CartCartCPN from "@/components/User/Shop/Cart/CartCPN.vue";

export default {
  name: "CHeader",
  data() {
    return {
      menuStatus: false,
      bgMenu: false,
      backGround: require("../../../assets/images/banner/loginBackGround.jpg"),
      search: "",
      isCartOpen: false,
      isCartNull: false,
    };
  },
  props:{
    changeNumber: Number,
  },
  watch: {
    search: function () {
      this.$emit("search", this.search);
    },
  },
  methods: {
    changeBGMenu() {
      window.addEventListener("scroll", function () {
        if (window.pageYOffset > 0) {
          this.bgMenu = true;
        } else {
          this.bgMenu = false;
        }
      });
    },
    changeCartStatus() {
      this.isCartOpen = !this.isCartOpen;
    },
    isLogin(){
      if(sessionStorage.getItem("userID") != null){
        return true;
      }
      return false;
    },
    logout(){
      sessionStorage.removeItem("userID");
      localStorage.removeItem("userID");
      this.$router.push("/login");
    },
    isRemember(){
      if(localStorage.getItem("userID") != null){
        let userID = localStorage.getItem("userID");
        sessionStorage.setItem("userID", userID);
      }
    }
  },
  components: {
    CartCartCPN,
  },
  created() {
    this.changeBGMenu();
    this.isRemember();
  },
};
</script>

<style>
</style>