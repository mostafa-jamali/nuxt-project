<template>
  <div class="mw-footer">
    <b-container class="py-sm-3 py-md-6">
      <b-row>
        <b-col cols="12" md="8" class="pl-5">
          <img src="../../assets/images/MW-logo.PNG" alt="mw-logo" class="mb-3" height="50px" />
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
            و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
            و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
            دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </b-col>
        <b-col cols="6" md="2" class="pt-10">
          <h5 class="bd-text-purple-bright mt-3">خدمات</h5>
          <ul class="list-unstyled ml-3">
            <li><b-link to="/" exact>خانه</b-link></li>
            <li><b-link to="/" exact>مقالات</b-link></li>
            <li><b-link to="/" exact>دوره‌ها</b-link></li>
            <li><b-link to="/" exact>پربازدیدترین‌ها</b-link></li>
            <li><b-link to="/" exact>جدیدترین‌ها</b-link></li>
          </ul>
        </b-col>
        <b-col cols="6" md="2" class="pt-10">
          <h5 class="bd-text-purple-bright mt-3">دسترسی‌ها</h5>
          <ul class="list-unstyled ml-3">
            <li><b-link to="/">درباره ما</b-link></li>
            <li><b-link to="/">تماس با ما</b-link></li>
            <li><b-link to="/">همکاری با ما</b-link></li>
          </ul>
        </b-col>
      </b-row>
      <div class="text-center mt-5">
        <b-icon icon="instagram" font-scale="2" class="instagram mx-1"></b-icon>
        <b-icon icon="linkedin" font-scale="2" class="linkedin mx-1"></b-icon>
        <b-icon icon="github" font-scale="2" class="github mx-1"></b-icon>
        <b-icon icon="telegram" font-scale="2" class="telegram mx-1"></b-icon>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'MwFooter',
};
</script>

<style lang="scss" src="~/assets/styles/component-styles/Footer.scss"></style>
