<template>
  <div class="mw-header">
    <b-navbar toggleable="lg" type="dark">
      <!--       PC header-->
      <b-container class="d-none d-lg-flex">
        <b-row class="w-100">
          <b-col class="d-flex justify-content-center align-items-center"><h2>This is Header of App (PC)</h2></b-col>
        </b-row>
      </b-container>

      <!--      mobile header -->
      <b-container class="d-flex d-lg-none">
        <b-row class="w-100">
          <b-col class="d-flex justify-content-center align-items-center">
            <h2>This is Header of App (Mobile)</h2>
          </b-col>
        </b-row>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'MwHeader'
};
</script>
<style lang="scss" src="~/assets/styles/component-styles/Header.scss"></style>
