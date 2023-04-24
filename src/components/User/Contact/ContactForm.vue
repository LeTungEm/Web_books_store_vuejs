<template>
  <form @submit.prevent>
    <div class="form-group mb-6">
        <CInputItem @changeValue="(name) => {this.name = name}" :type="'text'" :placeholder="'Name'" />
    </div>
    <div class="form-group mb-6">
        <CInputItem @changeValue="(email) => {this.email = email}" :type="'email'" :placeholder="'Email address'" />
    </div>
    <div class="form-group mb-6">
      <textarea
        class="w-full rounded-md border border-gray-300 focus:border-orange-700 focus:outline-none focus:ring-1 focus:ring-orange-700 py-3 px-2 text-gray-500"
        id="exampleFormControlTextarea13"
        rows="3"
        placeholder="Message"
      ></textarea>
    </div>
    <div class="form-group form-check text-center mb-6">
      <input
        type="checkbox"
        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange-700 checked:border-oranbg-orange-700 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
        id="exampleCheck87"
        checked
      />
      <label
        class="form-check-label inline-block text-gray-800"
        for="exampleCheck87"
        >Send me a copy of this message</label
      >
    </div>
    <button
      type="submit"
      class="w-full px-6 py-3 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-800 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out"
    >
      Send
    </button>
  </form>
</template>

<script>
import CInputItem from '@/components/UI/Library/CInputItem.vue';

export default {
    name:"ContactForm",
    data(){
        return {
            name: '',
            email:'',
        };
    },
    components:{
        CInputItem,
    }
};
</script>

<style>
</style>