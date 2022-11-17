<template>
  <b-col>
    <div v-if="$fetchState.pending">
      <div cols="12" md="6" v-for="i in 5" :key="i">
        <div class="p-3 my-2">
          <b-skeleton animation="wave" width="100%" height="30px"></b-skeleton>
        </div>
      </div>
    </div>
    <div v-else-if="$fetchState.error"><b>در دریافت اطلاعات خطایی رخ داده است.</b></div>
    <div v-else class="mb-5">
      <div class="mb-2">
        نام: <b>{{ userInfo.name }}</b>
      </div>
      <div class="mb-2">
        نام کاربری: <b>{{ userInfo.username }}</b>
      </div>
      <div class="mb-2">
        ایمیل: <b>{{ userInfo.email }}</b>
      </div>
      <div class="mb-2">
        تلفن: <b>{{ userInfo.phone }}</b>
      </div>
      <div class="mb-2">
        نام شرکت: <b>{{ userInfo.company.name }}</b>
      </div>
      <address class="mt-3">
        <i>آدرس</i> <br />
        شهر: {{ userInfo.address.city }}
        خیابان: {{ userInfo.address.street }}
      </address>
    </div>
  </b-col>
</template>
<script>
export default {
  name: 'UserInformation',
  data() {
    return {
      userInfo: {},
    };
  },
  async fetch() {
    const userId = this.$nuxt.$route.params.userId;
    this.userInfo = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.json());
  },
};
</script>
