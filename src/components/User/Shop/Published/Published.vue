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
      class="md:w-52 text-center py-5 h-full overflow-scroll scrollbar-hide hover:[&>*]:text-orange-700 border-2"
    >
      <li
        @click="this.published = !this.published"
        class="bg-orange-300 md:hidden"
      >
        filter
      </li>
      <li>
        <input v-model="listChoice" :value="'fantasy'" type="checkbox" />
        fantasy
      </li>
      <li>
        <input v-model="listChoice" :value="'travel'" type="checkbox" /> travel
      </li>
      <li>
        <input v-model="listChoice" :value="'ficture'" type="checkbox" />
        ficture
      </li>
      <li><input v-model="listChoice" :value="4" type="checkbox" /> 4</li>
      <li><input v-model="listChoice" :value="5" type="checkbox" /> 5</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CPublished",
  data() {
    return {
      published: false,
      listChoice: [],
    };
  },
  methods: {},
  watch: {
    listChoice: function () {
      this.$emit("changeChoie", this.listChoice);
    },
  },
  created() {},
};
</script>

<style>
</style>