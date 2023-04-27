<template>
  <div
    :style="`background-image: url(${backGround})`"
    class="flex items-center justify-end bg-center bg-cover w-full h-[100vh]"
  >
    <div
      class="flex items-center justify-center p-5 w-full lg:pr-20 md:w-1/2 h-full"
    >
      <div class="w-full h-full overflow-scroll md:h-auto md:overflow-visible scrollbar-hide">
        <router-link
          to="/"
          class="text-7xl lg:text-8xl font-bold uppercase md:-ml-56 md:whitespace-nowrap"
        >
          book
          <span
            :style="`background-image: url(${backGround})`"
            class="bg-clip-text text-transparent bg-cover bg-bottom"
            >forest</span
          >
        </router-link>
        <h1
          class="text-4xl text-center font-normal mt-10 mb-5 [&>*]:cursor-pointer hover:[&>*]:border-b hover:[&>*]:border-b-black"
        >
          <span
            @click="this.isLogin = true"
            v-bind:class="isLogin ? 'border-black border-b' : ''"
            >Login</span
          >
          |
          <span
            v-bind:class="isLogin ? '' : 'border-black border-b'"
            @click="this.isLogin = false"
            >Register</span
          >
        </h1>
        <div class="flex relative overflow-hidden">
          <LoginForm
            @showNotification="showNotification($event)"
            v-bind:class="isLogin ? '' : 'absolute -translate-x-full'"
            class="duration-500"
            :emailData="emailData"
          />
          <RegisterForm
            @showLoginForm="getEmailFromRegisterForm($event)"
            @showNotification="showNotification($event)"
            v-bind:class="isLogin ? 'absolute -translate-x-full' : ''"
            class="duration-500"
          />
        </div>
      </div>
    </div>
    <c-notification
      :status="notifiStatus"
      :content="notifiContent"
      @modelToggle="showNotification()"
    />
  </div>
</template>

<script>
import CNotification from "@/components/UI/Library/CNotification.vue";
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";

export default {
  name: "CLogin",
  data() {
    return {
      notifiStatus: false,
      notifiContent: "",
      isLogin: true,
      emailData: '',
      backGround: require("../../../assets/images/banner/loginBackGround.jpg"),
    };
  },
  components: {
    LoginForm,
    RegisterForm,
    CNotification,
  },
  methods: {
    showNotification(content) {
      this.notifiStatus = !this.notifiStatus;
      this.notifiContent = content;
    },
    getEmailFromRegisterForm(email){
      this.isLogin = true;
      this.emailData = email;
    }
  },
};
</script>

<style>
</style>