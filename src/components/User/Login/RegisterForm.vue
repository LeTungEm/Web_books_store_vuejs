<template>
  <form class="w-full p-5 rounded-lg border backdrop-blur-md overflow-hidden">
    <div class="mb-3">
      <label class="mb-2 text-xs lg:text-lg font-semibold">Name</label>
      <CInputItem
        :type="'text'"
        v-on:focus="this.nameErr = false"
        v-bind:class="nameErr ? 'border-red-700 bg-red-100' : ''"
        @changeValue="this.name = $event"
        :placeholder="'Enter your name'"
      />
    </div>

    <div class="mb-3 flex w-full">
      <div class="w-full mr-2">
        <label class="text-xs lg:text-lg font-semibold">Department</label>
        <select
          v-model="department"
          class="w-full rounded-md border border-gray-300 focus:border-orange-700 focus:outline-none focus:ring-1 focus:ring-orange-700 py-3.5 px-2 text-gray-500"
        >
          <option value="0">None</option>
          <option
            v-for="department in departments"
            :value="department.madonvi"
            :key="department"
          >
            {{ department.tendonvi }}
          </option>
        </select>
      </div>
      <div class="w-full mr-2">
        <label class="text-xs lg:text-lg font-semibold">Class</label>
        <select
          v-model="classID"
          class="w-full rounded-md border border-gray-300 focus:border-orange-700 focus:outline-none focus:ring-1 focus:ring-orange-700 py-3.5 px-2 text-gray-500"
        >
          <option value="0">None</option>
          <option
            v-for="oneClass in classes"
            :value="oneClass.malop"
            :key="oneClass"
          >
            {{ oneClass.tenlop }}
          </option>
        </select>
      </div>
    </div>

    <div class="mb-3">
      <label class="mb-2 text-xs lg:text-lg font-semibold">Email</label>
      <CInputItem
        :type="'email'"
        v-on:focus="this.emailErr = false"
        v-bind:class="emailErr ? 'border-red-700 bg-red-100' : ''"
        @changeValue="this.email = $event"
        :placeholder="'Enter your email'"
      />
    </div>

    <div class="mb-3">
      <label class="mb-2 text-xs lg:text-lg font-semibold">Password</label>
      <CInputItem
        :type="'password'"
        v-on:focus="this.passwordErr = false"
        v-bind:class="passwordErr ? 'border-red-700 bg-red-100' : ''"
        @changeValue="this.password = $event"
        :placeholder="'*****'"
      />
    </div>

    <div class="mb-3">
      <label class="mb-2 text-xs lg:text-lg font-semibold"
        >Confirm Password</label
      >
      <CInputItem
        :type="'password'"
        v-on:focus="this.rePasswordErr = false"
        v-bind:class="rePasswordErr ? 'border-red-700 bg-red-100' : ''"
        @changeValue="this.rePassword = $event"
        :placeholder="'*****'"
      />
    </div>

    <div class="mb-3">
      <div
        v-on:click="register()"
        class="mb-1.5 w-full text-center text-white cursor-pointer bg-orange-700 hover:bg-orange-700 px-2 py-2 rounded-md"
      >
        Register
      </div>
    </div>
  </form>
</template>

<script>
import CInputItem from "@/components/UI/Library/CInputItem.vue";
import DonViCongTacService from "@/service/DonViCongTacService";
import LopService from "@/service/LopService";
import DocGiaService from "@/service/DocGiaService";
export default {
  components: { CInputItem },
  name: "RegisterForm",
  data() {
    return {
      departments: [],
      department: 0,
      classes: [],
      classID: 0,
      name: "",
      email: "",
      password: "",
      rePassword: "",
      nameErr: false,
      emailErr: false,
      passwordErr: false,
      rePasswordErr: false,
    };
  },
  methods: {
    getAllDepartments() {
      DonViCongTacService.getAll().then((res) => {
        this.departments = res.data;
      });
    },
    getALlClass() {
      LopService.getAll().then((res) => {
        this.classes = res.data;
      });
    },
    validateForm() {
      let result = true;
      if (this.email == "") {
        this.emailErr = true;
        result = false;
      }
      if (this.password == "") {
        console.log("rong", this.password);
        this.passwordErr = true;
        result = false;
      }
      if (this.rePassword == "") {
        this.rePasswordErr = true;
        result = false;
      }
      if (this.rePassword != this.password) {
        this.$emit(
          "showNotification",
          "your confirm password is not correct !!!"
        );
        this.passwordErr = true;
        this.rePasswordErr = true;
        result = false;
      }
      if (this.name == "") {
        this.nameErr = true;
        result = false;
      }
      return result;
    },
    register() {
      if (this.validateForm()) {
        DocGiaService.insertDocGia(
          this.email,
          this.password,
          this.name,
          this.classID,
          this.department
        ).then((res) => {
          console.log(res.data.maxID);
          if(res.data.maxID){
            this.$emit("showLoginForm", this.email);
          }
        });
      }
    },
  },
  created() {
    this.getAllDepartments();
    this.getALlClass();
  },
};
</script>

<style>
</style>