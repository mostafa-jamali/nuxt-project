<template>
  <b-container class="d-flex flex-column justify-content-center align-items-center">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <div dir="ltr" >
      path :
      <span>
        {{ decodeURI(error.path) }}
      </span>
    </div>

    <div>
      message:
      <span>
        {{ error.message }}
      </span>
    </div>
    <NuxtLink to="/"><button class="border rounded m-3">Home page</button></NuxtLink>
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
