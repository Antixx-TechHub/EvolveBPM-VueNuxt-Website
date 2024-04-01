<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <Breadcrumb title="Blogs" subtitle="Blogs" />
    <BlogGridArea />
    <!-- <HomeCTA /> -->
    <Footer />
    <BackToTop />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import Breadcrumb from '~~/components/blog-grid/Breadcrumb.vue';
import BlogGridArea from '~~/components/blog-grid/BlogGridArea.vue';
// import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from "~~/layouts/footers/Footer.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, Breadcrumb, BlogGridArea, Footer, BackToTop },
  setup() {
    useHead({
      title: "Blogs - Evolve BPM ",
    });
  },
};
</script>