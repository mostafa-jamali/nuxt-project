<template>
  <div class="forget-password">
    <div class="mt-10">
      <form>
        <h3>Forgot Password</h3>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control form-control-lg" />
        </div>
        <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'login',
  data() {
    return {};
  },
};
</script>
