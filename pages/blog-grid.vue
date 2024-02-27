<template>
  <div>
    <header-one :header_solid="true" :commonOffcanvas="true" />
    <BlogTopBar />
    <FeaturedGrid />
    <blog-grid-area/>
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import BlogTopBar from "~~/components/blogs/BlogTopBar.vue";
import FeaturedGrid from '~~/components/featuredblog/FeaturedGrid.vue';
import BlogGridArea from '~~/components/blogs/BlogGridArea.vue';
import Footer from "~~/layouts/footers/Footer.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, Footer, BlogGridArea, BackToTop, FeaturedGrid,BlogTopBar },
  setup() {
    useHead({
      title: "Blog Grid - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
