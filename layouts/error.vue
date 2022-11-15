<template>
  <b-container class="d-flex flex-column justify-content-center align-items-center">
    <h1 v-if="error.statusCode === 404">صفحه موردنظر یافت نشد !</h1>
    <h1 v-else>مشکلی. پیش آمده است</h1>
    <div dir="ltr" >
      صفحه موردنظر :
      <span>
        {{ decodeURI(error.path) }}
      </span>
    </div>

    <!-- <div>
      message:
      <span>
        {{ error.message }}
      </span>
    </div> -->
    <NuxtLink to="/"><button class="border rounded m-3">بازگشت به خانه</button></NuxtLink>
  </b-container>
</template>

<script>
export default {
  name: 'error',
  layout: 'empty',
  props: {
    error: {
      type: Object,
    },
  },
};
</script>
