<template>
  <div className="relative border p-16 text-center pb-36">
    <CRating :rate="rate" />
    <h1 className="text-lg lg:text-2xl 2xl:text-4xl my-4">{{title}}</h1>
    <h5 className="text-sm lg:text-lg 2xl:text-xl">{{description}}</h5>
    <div className="absolute bottom-10 left-0 right-0">
      <h2 className="text-base lg:text-2xl">{{author}}</h2>
      <h4 className="text-gray-400">{{dateTime}}</h4>
    </div>
  </div>
</template>

<script>
import CRating from '@/components/UI/Library/CRating.vue';

export default {
    name:"ClientSayItem",
    props:{
        rate: Number,
        title: String,
        description: String,
        author: String,
        dateTime: String,
    },
    components:{
        CRating,
    }
};
</script>

<style>
</style>