<template>
  <div class="error-page my-6">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <h1>404 page</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MwErrorPage',

};
</script>

<style lang="scss" scoped>
.error-page {
  .error-image-wrapper {
    margin-top: 40px;

    img {
      @include sm-rule {
        width: 270px;
      }
    }
  }
}