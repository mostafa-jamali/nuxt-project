<template>
  <div class="mw-header">
    <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
      <!-- PC header -->
      <b-container class="d-none d-lg-flex px-0">
        <b-navbar-brand href="/" class="mr-0">
          <img src="../../assets/images/MW-logo.PNG" alt="mw-logo" class="header-logo rounded" height="30px" />
        </b-navbar-brand>

        <b-navbar-nav>
          <b-nav-item href="/">خانه</b-nav-item>
          <b-nav-item href="/" class="mr-4">مقالات</b-nav-item>
          <b-nav-item href="/" class="mr-4">دوره‌ها</b-nav-item>
          <b-nav-item href="/" class="mr-4">همکاری با ما</b-nav-item>
          <b-nav-item href="/" class="mr-4">درباره ما</b-nav-item>
          <b-nav-item href="/" class="mr-4">تماس با ما</b-nav-item>
        </b-navbar-nav>

        <!-- Left aligned nav items -->
        <b-navbar-nav class="mr-auto">
          <b-nav-form>
            <b-form-input size="sm" class="ml-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">
              <b-icon icon="search"></b-icon>
            </b-button>
          </b-nav-form>

          <b-nav-item-dropdown left class="mr-5">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-avatar size="2rem" variant="dark" class="mx-2"></b-avatar>
              <em>کاربر</em>
            </template>
            <b-dropdown-item href="/">پروفایل</b-dropdown-item>
            <b-dropdown-item href="/">خروج</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-container>

      <!-- mobile header -->
      <b-container class="d-flex d-lg-none px-0">
        <b-navbar-brand href="/" class="mr-0">
          <img src="../../assets/images/MW-logo.PNG" alt="mw-logo" class="header-logo rounded" height="30px" />
        </b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="pr-0">
            <b-nav-item href="/">خانه</b-nav-item>
            <b-nav-item href="/">آموزش‌ها</b-nav-item>
          </b-navbar-nav>

          <!-- Left aligned nav items -->
          <b-navbar-nav class="pr-0">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <b-avatar size="2rem" variant="dark" class="mx-2"></b-avatar>
                <em>کاربر</em>
              </template>
              <b-dropdown-item href="/">پروفایل</b-dropdown-item>
              <b-dropdown-item href="/">خروج</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-form>
              <b-form-input size="sm" class="ml-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">
                <b-icon icon="search"></b-icon>
              </b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- </b-navbar> -->
  </div>
</template>

<script>
export default {
  name: 'MwHeader',
};
</script>
<style lang="scss" src="~/assets/styles/component-styles/Header.scss"></style>
