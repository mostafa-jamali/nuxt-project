<template>
  <div class="sign-in">
    <div class="mt-10">
      <form>
        <h3>Sign In</h3>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control form-control-lg" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control form-control-lg" />
        </div>
        <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
        <p class="forgot-password text-right mt-2 mb-4">
          <router-link to="/auth/forget-password">Forgot password ?</router-link>
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
