<template>
    <nav class="sticky top-0 left-0 right-0 z-50">
        <!-- First menu -->
        <div class="lg:flex justify-between px-10 md:px-20 py-5 bg-black text-white text-lg">
            <div class="flex justify-center gap-5 lg:gap-10 text-xs md:text-base xl:text-lg hover:[&>*]:text-orange-700 [&>*]:duration-500">
                <router-link to="/">Membership</router-link>
                <router-link to="/">Coupon and Deals</router-link>
                <router-link to="/">Best Seller</router-link>
            </div>
            <div class="flex justify-center gap-5 lg:gap-10 items-center text-xs md:[&>*]:text-base xl:[&>*]:text-lg [&>*]:flex [&>*]:items-center hover:[&>*]:text-orange-700 [&>*]:duration-500">
                <router-link to="/"><ion-icon class="pr-2 text-inherit" name="person-outline"></ion-icon>My Account</router-link>
                <router-link to="/"><ion-icon class="pr-2 text-inherit" name="heart-outline"></ion-icon>Wishlist</router-link>
            </div>
        </div>
        <!-- Main menu  -->
        <div v-bind:class="{'bg-gray-100':bgMenu, 'bg-white':!bgMenu}" class="relative gap-20 py-5 px-10 lg:px-20 xl:grid xl:grid-cols-4">
            <div class="flex justify-between xl:justify-start">
                <div class="text-center">
                    <ion-icon class="text-lg md:text-2xl xl:text-3xl" name="book-sharp"></ion-icon>
                    <h1 class="text-[10px] md:text-[16px] lg:text-xl font-bold uppercase">book <span class="text-orange-700">forest</span></h1>
                    <h3 class="text-[8px] md:text-[14px] lg:text-lg">Study blog</h3>
                </div>
                <ion-icon @click="this.menuStatus = !this.menuStatus" class="text-4xl block xl:hidden" name="menu-outline"></ion-icon>
            </div>
            <div v-bind:class="!this.menuStatus?'-translate-y-[100%] opacity-0':''" class="absolute top-full -z-10 left-0 right-0 pb-5 bg-inherit duration-700 transition-transform lg:px-20 xl:opacity-100 xl:z-[51] xl:translate-y-0 xl:bg-none xl:top-0 xl:relative px-5 font-medium lg:text-lg xl:col-span-2 xl:pb-0 xl:mt-0">
                <div class="flex shadow-sm items-center bg-white border rounded-sm">
                    <input v-model="search" class="w-full h-6 text-[18px] outline-0 px-5 font-normal" placeholder="searching...." type="search"/>
                    <ion-icon class="text-3xl pr-5 py-1" name="search-sharp"></ion-icon>
                </div>
                <div class="justify-around gap-20 mt-5 xl:flex [&>*]:font-bold [&>*]:block hover:[&>*]:text-orange-700 [&>*]:duration-500">
                    <router-link to="/">Home</router-link>
                    <router-link to="/shop">Shop</router-link>
                    <router-link to="/blogs">Blogs</router-link>
                    <router-link to="/contact">Contact</router-link>
                </div>
            </div>
            <div v-bind:class="menuStatus?'flex':'hidden'" class=" xl:flex justify-around mt-3">
                <div class="pr-5 md:pr-20 flex align-middle text-lg"><ion-icon class="lg:text-3xl my-auto md:my-0 mr-2 cursor-pointer" name="map-sharp"></ion-icon>Bookshop Finder</div>
                <ion-icon class="text-lg lg:text-3xl cursor-pointer" name="cart-outline"></ion-icon>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: "CHeader",
  data() {
    return {
      menuStatus: false,
      bgMenu: false,
      search: "",
    };
  },
  watch:{
    search:function(){
      this.$emit("search", this.search);
    }
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
  },
  created(){
    this.changeBGMenu();
  }
};
</script>

<style>
</style>