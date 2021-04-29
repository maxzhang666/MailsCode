<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          验证码获取
        </h2>
      </div>
      <div class="mt-8 space-y-6" action="" id="form">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="邮箱地址"
              v-model="email"
            />
          </div>
          <div class="h-32">
            <label for="verify-code" class="sr-only">验证内容</label>
            <textarea
              id="verify-code"
              name="verify-code"
              type="text"
              required=""
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm cursor-not-allowed min-h-full"
              readonly
              placeholder="验证内容"
              v-model="msg"
            ></textarea>
          </div>
        </div>
        <div>
          <button
            type="submit"
            @click="getCode"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            获取验证码
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { getEmail } from "./api";
import  swal  from "sweetalert";
export default {
  data() {
    return {
      email: "",
      msg: "",
    };
  },
  methods: {
    getCode: function () {
      const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
      if (!reg.test(this.email)) {
        this.email = "";
        swal(`不是有效的邮箱`);
      } else {
        getEmail(this.msg).then((e) => {
          let data = e.data;
          if (data.status) {
          } else {
            this.email = "";
            swal(data.message);
          }
        });
      }
    },
  },
};
</script>