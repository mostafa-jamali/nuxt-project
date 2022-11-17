<template>
  <div class="forget-password">
    <div class="mt-10">
      <form>
        <h3>فراموشی رمز عبور</h3>
        <div class="form-group">
          <label>آدرس ایمیل</label>
          <b-input type="email" class="form-control form-control-lg" placeholder="لطفا ایمیل خود را وارد کنید" />
        </div>
        <b-button type="submit" class="btn-lg btn-block" variant="primary">بازیابی رمز عبور</b-button>
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
