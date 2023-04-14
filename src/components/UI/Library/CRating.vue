<template>
  <div
    class="[&>*]:text-base xl:[&>*]:text-lg [&>*]:pr-1 [&>*]:text-yellow-400"
  >
    <ion-icon
      v-for="star in arrStar"
      :key="star"
      :name="star"
    ></ion-icon>
  </div>
</template>

<script>
export default {
  name: "CRating",
  data() {
    return {
      arrStar: [],
    };
  },
  props: {
    rate: Number,
  },
  methods: {
    getArrStar() {
      let score = parseFloat(this.rate.toFixed(1));

      while (score >= 0.5) {
        this.arrStar.push(score >= 1 ? "star" : "star-half");
        score--;
      }

      while (this.arrStar.length <= 4) {
        this.arrStar.push("star-outline");
      }
    },
  },
  created(){
    this.getArrStar();
  }
};
</script>

<style>
</style>