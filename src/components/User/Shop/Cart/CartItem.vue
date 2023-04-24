<template>
  <div>
    <div class="flex justify-between items-center w-full mt-5">
      <div class="flex items-center">
        <img
          :src="require(`../../../../assets/images/books/${image}`)"
          class="object-cover w-24 h-24 mr-4"
          alt=""
        />
        <div class="">
          <p>{{ name }}</p>
          <p>
            x
            <span class="font-bold text-lg">{{ amount }}</span>
          </p>
        </div>
      </div>
      <button
        @click="this.$emit('removeItem', id)"
        class="cursor-pointer hover:text-gray-600"
      >
        <ion-icon name="close-outline"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name:"CartItem",
    props:{
        id: String,
        name: String,
        image: String,
        amount: String,
    }
};
</script>

<style>
</style>