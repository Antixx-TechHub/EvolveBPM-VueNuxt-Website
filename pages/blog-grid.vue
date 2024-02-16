<template>
  <div>
    <header-one :header_solid="true" :commonOffcanvas="true" />
    <slider-breadcrumb />
    <FeaturedGrid />
    <blog-grid-area/>
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import SliderBreadcrumb from "~~/components/breadcrumb/SliderBreadcrumb.vue";
import FeaturedGrid from '~~/components/featuredblog/FeaturedGrid.vue';
import BlogGridArea from '~~/components/blogs/BlogGridArea.vue';
import Footer from "~~/layouts/footers/Footer.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, Footer, SliderBreadcrumb, BlogGridArea, BackToTop, FeaturedGrid },
  setup() {
    useHead({
      title: "Blog Grid - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
