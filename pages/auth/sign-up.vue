<template>
  <div class="sign-up">
    <div class="mt-10">
      <form>
        <h3>ثبت نام</h3>
        <div class="form-group">
          <label>نام</label>
          <input type="text" class="form-control form-control-lg" />
        </div>
        <div class="form-group">
          <label>ایمیل</label>
          <input type="email" class="form-control form-control-lg" />
        </div>
        <div class="form-group">
          <label>رمز عبور</label>
          <input type="password" class="form-control form-control-lg" />
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
    return {};
  },
};
</script>
<style lang="scss" src="../../assets/styles/component-styles/auth/login.scss"></style>
