<template>
  <ion-icon
    @click="this.published = !this.published"
    class="md:hidden text-2xl"
    name="list-outline"
  ></ion-icon>
  <div
    v-bind:class="
      published ? 'bg-white translate-y-0 opacity-100 z-20' : 'translate-y-full'
    "
    class="opacity-0 fixed left-0 w-full h-[100vh] duration-500 transition-transform flex-none md:opacity-100 md:translate-y-0 md:relative md:w-auto md:block"
  >
    <ul
      class="md:w-52 text-center py-5 h-full text-xl overflow-scroll scrollbar-hide hover:[&>*]:text-orange-700 border-2"
    >
      <li
        @click="this.published = !this.published"
        class="bg-white border font-bold md:hidden"
      >
        FILTER
      </li>
      <li class="px-5">        
        <label class="block text-sm font-medium text-gray-900 dark:text-white"> Giá từ hơn {{formatPrice(arrStepPrice[rangePrice].minPrice)}} - {{(arrStepPrice[rangePrice].maxPrice)?formatPrice(arrStepPrice[rangePrice].maxPrice):"cao hơn"}}</label>
        <input type="range" min="0" max="5" v-model="rangePrice" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
      </li>
      <li>
        <input class="peer hidden" id="fantasy" v-model="listChoice" :value="'fantasy'" type="checkbox" />
        <label class="peer-checked:text-orange-700 peer-checked:font-bold" for="fantasy">fantasy</label>
      </li>
      <li>
        <input class="peer hidden" id="travel" v-model="listChoice" :value="'travel'" type="checkbox" />
        <label class="peer-checked:text-orange-700 peer-checked:font-bold" for="travel">travel</label>
      </li>
      <li>
        <input class="peer hidden" id="ficture" v-model="listChoice" :value="'ficture'" type="checkbox" />
        <label class="peer-checked:text-orange-700 peer-checked:font-bold" for="ficture">ficture</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatPrice } from '@/assets/js';

export default {
  name: "CPublished",
  data() {
    return {
      published: false,
      listChoice: [],
      rangePrice: 1,
      arrStepPrice: [
        {
          minPrice: 0,
          maxPrice: 100000,
        },
        {
          minPrice:100000,
          maxPrice: 200000,
        },
        {
          minPrice: 200000,
          maxPrice: 350000,
        },
        {
          minPrice: 350000,
          maxPrice: 600000,
        },
        {
          minPrice: 600000,
          maxPrice: 1000000,
        },
        {
          minPrice: 1000000,
          maxPrice: null,
        }
      ],
    };
  },
  methods: {
    formatPrice,
  },
  watch: {
    listChoice: function () {
      this.$emit("changePublishedChoie", this.listChoice);
    },
    rangePrice:function(){
      this.$emit("changeRangePrice", this.arrStepPrice[this.rangePrice].minPrice, this.arrStepPrice[this.rangePrice].maxPrice);
    }
  },
  created() {},
};
</script>

<style>
</style>