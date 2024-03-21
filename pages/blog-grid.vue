<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <BlogBreadcrumb />
    <BlogGridArea />
    <HomeCTA />
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import BlogBreadcrumb from '~~/components/blog-grid/BlogBreadcrumb.vue';
import BlogGridArea from '~~/components/blog-grid/BlogGridArea.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from "~~/layouts/footers/Footer.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, BlogBreadcrumb, BlogGridArea, HomeCTA, Footer, BackToTop },
  setup() {
    useHead({
      title: "Blogs - Evolve BPM ",
    });
  },
};
</script>