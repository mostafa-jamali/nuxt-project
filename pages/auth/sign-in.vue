<template>
  <div class="sign-in">
    <div class="mt-10">
      <form>
        <h3>ورود کاربر</h3>
        <div class="form-group">
          <label>ایمیل</label>
          <b-input type="email" class="form-control form-control-lg" />
        </div>
        <div class="form-group">
          <label>رمز عبور</label>
          <b-input type="password" class="form-control form-control-lg" />
        </div>
        <b-button type="submit" class="btn-lg btn-block" variant="primary">ورود</b-button>
        <p class="forgot-password text-right mt-2 mb-4">
          <router-link to="/auth/forget-password">فراموشی رمز عبور</router-link>
        </p>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sign-in',
  layout: 'login',
  data() {
    return {};
  },
};
</script>
<style lang="scss" src="../../assets/styles/component-styles/auth/login.scss"></style>
