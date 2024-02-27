<template>
  <section
    class="about__heading about__heading-overlay about__spacing include-bg jarallax"
    :style="{ backgroundImage: `url(${bg})` }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-10">
          <div class="about__heading-content text-center p-relative z-index-1">
            <h3 class="about__heading-title">
              Blogs
            </h3>
            <span class="about__heading-subtitle">Content Strategy Redefined</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// internal
import bg from '~/assets/img/about/about-breadcrumb.jpg';

export default {
  data () {
    return {bg}
  }
};
</script>
