<template>
  <div class="sign-up">
    <div class="mt-10">
      <form @submit.prevent="signUp">
        <h3>ثبت نام</h3>
        <div class="form-group">
          <label for="name">نام</label>
          <input id="name" name="name" v-model="form.name" type="text" class="form-control form-control-lg" />
        </div>
        <div class="form-group">
          <label for="email">ایمیل</label>
          <input id="email" name="email" v-model="form.email" type="email" class="form-control form-control-lg" />
        </div>
        <div class="form-group">
          <label for="password">رمز عبور</label>
          <input
            id="password"
            name="password"
            v-model="form.password"
            type="password"
            class="form-control form-control-lg"
          />
        </div>

        <!-- show errors -->
        <div v-if="errors.length" class="text-danger">
          <ul class="pr-4">
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </div>

        <b-button type="submit" class="btn-lg btn-block" variant="primary">ثبت نام</b-button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sign-up',
  layout: 'login', // layouts/login
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
      },
      errors: [],
    };
  },
  methods: {
    signUp() {
      const englishChar = /^[a-zA-Z]+$/;

      if (
        this.form.name &&
        englishChar.test(this.form.name) &&
        this.form.email &&
        this.form.password &&
        englishChar.test(this.form.password)
      ) {
        const jwt = this.$createJWT(this.form);
        localStorage.setItem('token', jwt);

        this.$router.push({ path: '/' });
      }

      this.errors = [];

      if (!this.form.name) {
        this.errors.push('نام نمی تواند خالی باشد.');
      } else if (!englishChar.test(this.form.name)) {
        this.errors.push('نام:  تنها مجاز به استفاده از حروف لاتین هستید.');
      }

      if (!this.form.email) {
        this.errors.push('ایمیل نمی تواند خالی باشد.');
      }

      if (!this.form.password) {
        this.errors.push('رمز عبور نمی تواند خالی باشد.');
      } else if (!englishChar.test(this.form.password)) {
        this.errors.push('رمز عبور:  تنها مجاز به استفاده از حروف لاتین هستید.');
      }
    },
  },
};
</script>
<style lang="scss" src="../../assets/styles/component-styles/auth/login.scss"></style>
