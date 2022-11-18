<template>
  <div class="login">
    <div class="mt-10">
      <form @submit.prevent="loginUser">
        <h3>ورود</h3>
        <div class="form-group">
          <label for="username">نام کاربری</label>
          <input
            id="username"
            username="username"
            v-model="form.username"
            type="text"
            class="form-control form-control-lg"
            @focusout="validationUsername"
          />
          <p class="text-danger">{{ usernameError }}</p>
        </div>
        <div class="form-group">
          <label for="email">ایمیل</label>
          <input
            id="email"
            name="email"
            v-model="form.email"
            type="email"
            class="form-control form-control-lg"
            @focusout="validationEmail"
          />
          <p class="text-danger">{{ emailError }}</p>
        </div>

        <b-button
          type="submit"
          :disabled="!form.name || !form.email"
          class="btn-lg btn-block"
          variant="primary"
        >
          ورود
        </b-button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  layout: 'login', // layouts/login
  data() {
    return {
      form: {
        username: null,
        email: null,
      },
      usernameError: '',
      emailError: '',
    };
  },
  methods: {
    validationUsername() {
      this.usernameError = this.$validationForm(this.form.username);
    },
    validationEmail() {
      if (!this.form.email) {
        this.emailError = 'این فیلد نمی تواند خالی باشد.';
      } else {
        this.emailError = '';
      }
    },

    async loginUser() {
      if (!this.usernameError && !this.emailError) {
        try {
          //  use API ('/api/auth/user') for login (The main method for auth in the Nuxt)
          // await this.$auth.loginWith('email', {
          //   data: {
          //     username: this.form.username,
          //     email: this.form.email,
          //   },
          // });

          // create fake JWT by client (The fake method for auth in the Nuxt)
          const fakeJWT = this.$createJWT(this.form);
          // console.log('fakeJWT :', fakeJWT);
          this.$auth.strategies.email.token.set(fakeJWT);

          // console.log('auth :', this.$auth);
          this.$router.push({ path: '/' });
        } catch (err) {
          console.log({ err });
        }
      }
    },
  },
};
</script>
<style lang="scss" src="../../assets/styles/component-styles/auth/login.scss"></style>
