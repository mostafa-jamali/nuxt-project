<template>
  <div class="sign-up">
    <div class="mt-10">
      <form>
        <h3>Sign Up</h3>
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" class="form-control form-control-lg" />
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control form-control-lg" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control form-control-lg" />
        </div>
        <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>
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
