<template>
  <b-container class="mw-main">
    <div v-if="pending">
      <b-row>
        <b-col cols="12" md="6" v-for="i in 8">
          <div class="p-3 my-3">
            <b-skeleton animation="fade" width="100%" height="120px"></b-skeleton>
          </div>
        </b-col>
      </b-row>
    </div>
    <div v-else-if="error" class="my-5"><b>در دریافت اطلاعات خطایی رخ داده است.</b></div>
    <div v-else class="mb-5">
      <!-- <h3 class="mt-3">کاربران</h3> -->
      <b-row>
        <b-col cols="12" md="6" v-for="(user, index) in users" :key="index">
          <b-link :href="`/users/${user.id}`" class="card-link">
            <b-card class="user-card my-3">
              <div>
                <b-avatar size="2rem" variant="secondary">
                  <b-icon icon="person-fill"></b-icon>
                </b-avatar>
                <span>
                  <b>{{ user.name }}</b>
                </span>
                <div class="mt-3 d-flex justify-content-between">
                  <span>
                    ایمیل: <b>{{ user.email }}</b>
                  </span>
                  <span>
                    تلفن: <b dir="ltr"> {{ user.phone }}</b>
                  </span>
                </div>
              </div>
              <hr />
              <div class="mt-3 d-flex justify-content-between">
                <span>
                  نام شرکت: <b dir="ltr"> {{ user.company.name }}</b>
                </span>
                <span>
                  آدرس: <b>{{ user.address.city }}</b>
                </span>
              </div>
            </b-card>
          </b-link>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'IndexPage',
  computed: {
    ...mapState({
      users: state => state.users.usersList,
      pending: state => state.users.pending,
      error: state => state.users.error,
    }),
  },
  methods: {
    ...mapActions({
      getUsers: 'users/getUsers',
    }),
  },
  created() {
    this.getUsers();
  },
};
</script>
<style lang="scss" src="~/assets/styles/component-styles/index.scss"></style>
