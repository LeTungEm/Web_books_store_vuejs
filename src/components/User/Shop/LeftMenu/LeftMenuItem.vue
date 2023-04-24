<template>
  <ul class="border rounded-sm m-2 hover:[&>*]:text-orange-700">
    <span class="flex justify-start font-medium text-lg pl-2 pt-2">{{title}}</span>
    <li class="pl-5" v-for="data in listData" :key="data">
      <input
        class="peer mr-2"
        :id="data"
        v-model="listSelected"
        :value="data"
        type="checkbox"
      />
      <label
        class="peer-checked:text-orange-700 peer-checked:font-bold"
        :for="data"
        >{{ data }}
      </label>
    </li>
  </ul>
</template>

<script>
export default {
    name:"LeftMenuItem",
    data(){
        return{
            listSelected: [],
        };
    },
    watch:{
        listSelected:function(){
            this.$emit("changeSelected", this.listSelected);
        }
    },
    props:{
        title: String,
        listData: Array,
    }
};
</script>

<style>
</style>