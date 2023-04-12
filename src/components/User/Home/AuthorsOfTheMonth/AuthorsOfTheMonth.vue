<template>
  <h1
    className="text-3xl text-center font-medium mt-32 lg:text-5xl 2xl:text-7xl"
  >
    <ion-icon class="text-orange-500 -translate-y-5" name="sparkles"></ion-icon>
    Authors Of The Month
    <ion-icon class="text-orange-500 translate-y-8" name="sparkles"></ion-icon>
  </h1>
  <h5 className="pt-5 text-2xl text-center text-gray-600">
    asdnsndsdjj adnkasd asdasds asdsads
  </h5>
  <div className="flex flex-wrap justify-center gap-5 mt-20 px-10 lg:gap-16">
    <AuthorItem
      :image="image"
      title="Harry Potter"
      description="asndjsd asdjsad asdsd asdjsad asdsd asdjsad asdsd asdjsad asdsd"
    />
    <AuthorItem
      :image="image2"
      title="Jean Snow"
      description="asndjsd asdjsad asdsd asdjsad asdsd asdjsad asdsd asdjsad asdsd"
    />
    <AuthorItem
      :image="image"
      title="Peter Hause"
      description="asndjsd asdjsad asdsd asdjsad asdsd asdjsad asdsd asdjsad asdsd"
    />
    <AuthorItem
      :image="image2"
      title="Amanda Sweet"
      description="asndjsd asdjsad asdsd asdjsad asdsd asdjsad asdsd asdjsad asdsd"
    />
  </div>
</template>

<script>
import AuthorItem from "./AuthorItem.vue";

export default {
  name: "AuthorsOfTheMonth",
  data(){
    return {
        image:require("../../../../assets/images/authors/2.jpg"),
        image2:require("../../../../assets/images/authors/1.jpg")
    };
  },
  components: {
    AuthorItem,
  },
};
</script>

<style>
</style>