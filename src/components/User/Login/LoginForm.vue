<template>
  <form class="w-full p-5 rounded-lg border backdrop-blur-md overflow-hidden">
    <div class="mb-3">
      <label class="mb-2 text-xs lg:text-lg font-semibold">Email</label>
      <CInputItem
        :type="'email'"
        v-on:focus="this.emailErr = false"
        v-bind:class="emailErr ? 'border-red-700 bg-red-100' : ''"
        @changeValue="this.email = $event"
        :data="email"
        :placeholder="'Enter your email'"
      />
    </div>

    <div class="mb-3">
      <label class="mb-2 text-xs lg:text-lg font-semibold">Password</label>
      <CInputItem
        :type="'password'"
        v-on:focus="this.passWordErr = false"
        v-bind:class="passWordErr ? 'border-red-700 bg-red-100' : ''"
        @changeValue="this.passWord = $event"
        :placeholder="'*****'"
      />
    </div>

    <div class="mb-3 flex flex-wrap content-center">
      <input
        v-model="remember"
        id="remember"
        type="checkbox"
        class="mr-1 w-5 checked:bg-orange-700"
      />
      <label for="remember" class="mr-auto text-xs lg:text-lg font-semibold"
        >Remember for 30 days</label
      >
      <a href="#" class="text-xs lg:text-lg font-semibold text-orange-700"
        >Forgot password?</a
      >
    </div>

    <div class="mb-3">
      <div
        @click="checkLogin()"
        class="mb-1.5 w-full text-center text-white cursor-pointer bg-orange-700 hover:bg-orange-700 px-2 py-2 rounded-md"
      >
        Sign in
      </div>
    </div>
  </form>
</template>

<script>
import CInputItem from "@/components/UI/Library/CInputItem.vue";
import DocGiaService from "@/service/DocGiaService";
export default {
    name: "LoginForm",
    data() {
        return {
            email: "",
            passWord: "",
            emailErr: "",
            passWordErr: "",
            remember: "",
        };
    },
    watch:{
      emailData:function(){
        this.email = this.emailData;
      }
    },
    props:{
      emailData: String,
    },
    methods: {
        validateForm() {
            let result = true;
            if (this.email == "") {
                this.emailErr = true;
                result = false;
            }
            if (this.passWord == "") {
                this.passWordErr = true;
                result = false;
            }
            return result;
        },
        checkLogin() {
            if (this.validateForm()) {
                DocGiaService.checkLogin(this.email, this.passWord).then((res) => {
                    if (res.data) {
                        if (this.remember) {
                            localStorage.setItem("userID", res.data.iddocgia);
                        }
                        sessionStorage.setItem("userID", res.data.iddocgia);
                        this.$router.push("/");
                    }else{
                      this.$emit("showNotification", "Email or password is not correct !!!");
                    }
                });
            }
        },
        getEmailFromRegisterForm(){
          if(this.emailData){
            console.log(this.emailData);
            this.eamil = this.emailData;
          }
          console.log("null");
        }
    },
    components: { CInputItem },
    created(){
    }
};
</script>

<style>
</style>